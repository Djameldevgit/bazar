import Select from 'react-select';

export function Color({ handleChangeInput, postData }) {
    return (
        <div>
            <div className="form-group">
                <select
                    multiple={false}
                    name="color"
                    value={postData.attributes.color}
                    onChange={handleChangeInput}
                    className="form-control"
                >
                    <option value="">Couleur</option>
                    <option value="Blanc">Blanc</option>
                    <option value="Noir">Noir</option>
                    <option value="Gris">Gris</option>
                    <option value="Argent">Argent</option>
                    <option value="Bleu">Bleu</option>
                    <option value="Bleu clair">Bleu clair</option>
                    <option value="Bleu marine">Bleu marine</option>
                    <option value="Rouge">Rouge</option>
                    <option value="Bordeaux">Bordeaux</option>
                    <option value="Vert">Vert</option>
                    <option value="Vert foncé">Vert foncé</option>
                    <option value="Jaune">Jaune</option>
                    <option value="Orange">Orange</option>
                    <option value="Marron">Marron</option>
                    <option value="Beige">Beige</option>
                    <option value="Violet">Violet</option>
                    <option value="Rose">Rose</option>
                    <option value="Obergine">Obergine</option>
                    <option value="Doré">Doré</option>
                    <option value="Bronze">Bronze</option>
                </select>
            </div>
        </div>
    );
}

export function Annee({ handleChangeInput, postData }) {
    return (

        <div className="form-group">

            <select
                name="anne"
                className="form-control"
                value={postData.attributes.anne}
                onChange={handleChangeInput}
            >
                <option value="">Sélectionner l'année</option>
                {Array.from({ length: 50 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    );
                })}
            </select>
        </div>


    );
}


 
    export function Optionduvoiture({ postData, setPostData }) {
        const optionduvoiture = [
            { label: 'Climatisation', value: 'Climatisation' },
            { label: 'Alarme', value: 'Alarme' },
            { label: 'Jantes alliage', value: 'Jantes alliage' },
            { label: 'Rétroviseurs électriques', value: 'Retroviseurs électriques' },
            { label: 'Vitres électriques', value: 'Vitres électriques' },
            { label: 'ESP', value: 'ESP' },
            { label: 'Phares antibrouillard', value: 'Phares antibrouillard' },
            { label: 'Feux de jour', value: 'Feux de jour' },
            { label: 'Radar de recul', value: 'Radar de recul' },
            { label: 'Direction assistée', value: 'Direction assistée' },
            { label: 'Radio CD', value: 'Radio CD' },
            { label: 'Toit ouvrant', value: 'Toit ouvrant' },
            { label: 'Phares xénon', value: 'Phares xénon' },
            { label: 'Sièges chauffants', value: 'Sieges chauffants' },
            { label: 'Sièges en cuir', value: 'Sieges en cuir' },
            { label: 'Système de navigation (GPS)', value: 'GPS' },
            { label: 'Caméra de recul', value: 'Caméra de recul' },
            { label: 'Capteur de pluie', value: 'Capteur de pluie' },
            { label: 'Capteur de luminosité', value: 'Capteur de luminosité' },
            { label: 'Régulateur de vitesse', value: 'Regulateur de vitesse' },
            { label: 'Limiteur de vitesse', value: 'Limiteur de vitesse' },
            { label: 'Aide au stationnement', value: 'Aide au stationnement' },
            { label: 'Bluetooth', value: 'Bluetooth' },
            { label: 'Commande vocale', value: 'Commande vocale' },
            { label: 'Affichage tête haute', value: 'Affichage tête haute' },
            { label: 'Volant chauffant', value: 'Volant chauffant' },
            { label: 'Démarrage sans clé', value: 'Démarrage sans clé' },
            { label: 'Freinage d’urgence automatique', value: 'Freinage d’urgence automatique' },
            { label: 'Alerte de franchissement de ligne', value: 'Alerte de franchissement de ligne' },
            { label: 'Surveillance des angles morts', value: 'Surveillance des angles morts' },
            { label: 'Suspension adaptative', value: 'Suspension adaptative' },
            { label: 'Toit panoramique', value: 'Toit panoramique' },
            { label: 'Chargeur sans fil', value: 'Chargeur sans fil' },
            { label: 'Éclairage d’ambiance', value: 'Éclairage d’ambiance' },
            { label: 'Assistance au maintien de voie', value: 'Assistance au maintien de voie' }
        
        ];
    
        // 🔧 Mueves esta función AQUÍ dentro del componente
        const handleoptionduvoiture = (selectedOptions) => {
            setPostData(prevState => ({
                ...prevState,
                attributes: {
                    ...prevState.attributes,
                    optionduvoiture: selectedOptions ? selectedOptions.map(option => option.value) : []
                }
            }));
        };
    
        return (
            <div>
                <Select
                    placeholder="Option du voiture"
                    value={optionduvoiture.filter(obj =>
                        postData.attributes.optionduvoiture &&
                        postData.attributes.optionduvoiture.includes(obj.value)
                    )}
                    options={optionduvoiture}
                    onChange={handleoptionduvoiture}
                    isMulti={true}
                    closeMenuOnSelect={false}
                />
            </div>
        );
    }