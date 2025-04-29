import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { imageShow, videoShow } from '../utils/mediaShow';
import { GLOBALTYPES } from '../redux/actions/globalTypes';

import { Form,  Button } from 'react-bootstrap';
import modelosjson from "../json/modelos.json"
import communesjson from "../json/communes.json"
import { createPostAprove, updatePost } from '../redux/actions/postAproveAction';
import modelossjson from "../json/telefonos.json"
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';  // Importar los estilos predeterminados
import { CategorySelect } from './ReactIcons';
import { FaImage, FaTimes } from 'react-icons/fa';
import { ItemsElectromenagerElectronique } from './ReactIcons';
import { ItemsAutomobileVehicules } from './ReactIcons';
import { Subcategoryimmobilier } from './ReactIcons';
import { ItemsImmobilier } from './ReactIcons';
import { ItemsInformatique } from './ReactIcons';
import { ItemsTéléphones } from './ReactIcons';
import { ItemsVêtementsMode } from './ReactIcons';
import { ItemsSantéBeauté } from './ReactIcons';
import { ItemsMeublesMaison } from './ReactIcons';
import { ItemsEmploi } from './ReactIcons';
/*import { ItemsServices } from './ReactIcons';
import { ItemsLoisirsDivertissements } from './ReactIcons';
import { ItemsMatériauxÉquipement } from './ReactIcons';
import { Itemssport } from './ReactIcons';
 */


const StatusModal = () => {
    const { auth, theme, socket, status, } = useSelector((state) => state);

    const priceUnitOptions = [
        { value: 'DA', label: 'DA' },
        { value: 'Millions', label: 'Millions' },
        { value: 'Milliard', label: 'Milliard' }
    ];

    const offerTypeOptions = [
        { value: 'Fixe', label: 'Fixe' },
        { value: 'Négociable', label: 'Négociable' }
    ];
    const dispatch = useDispatch()

    const initilastate = {

        category: "",
        subCategory: "",

        title: "",


        description: "",
        price: "",
        unidaddeprecio: "",
        oferta: "",
        change: "",
        wilaya: "",
        commune: "",
        quartier: "",
        email: "",

        attributes: {
            subCategory2: "",
            title2: "",
            marque: "",
            model: "",
            marca: "",
            modelo: "",
            marcas: "",
            modelos: "",
        }
    }


    const [postData, setPostData] = useState(initilastate)
    const [images, setImages] = useState([])
    const [selectedWilaya, setSelectedWilaya] = useState("");
    const [selectedMarca, setSelectedMarca] = useState("");
    const [selectedMarcaSmartphone, setSelectedMarcaSmartphone] = useState("");


    const fileInputRef = useRef(null);

    const handleWilayaChange = (event) => {
        const selectedWilaya = event.target.value;
        setSelectedWilaya(selectedWilaya);

        // Buscar la wilaya seleccionada
        const wilayaEncontrada = communesjson.find((wilaya) => wilaya.wilaya === selectedWilaya);
        const communes = wilayaEncontrada ? wilayaEncontrada.commune : [];

        // Establecer la primera comuna disponible o vacío


        // Actualizar postData con la wilaya seleccionada
        setPostData((prevState) => ({
            ...prevState,
            wilaya: selectedWilaya,
            commune: communes.length > 0 ? communes[0] : "", // Actualizar comuna si hay una disponible
        }));
    };
    const wilayasOptions = communesjson.map((wilaya, index) => (
        <option key={index} value={wilaya.wilaya}>
            {wilaya.wilaya}
        </option>
    ));
    const communesOptions = selectedWilaya
        ? communesjson
            .find((wilaya) => wilaya.wilaya === selectedWilaya)
            ?.commune?.map((commune, index) => (
                <option key={index} value={commune}>
                    {commune}
                </option>
            ))
        : [];
    const handleCommuneChange = (event) => {
        const selectedCommune = event.target.value;

        // Actualizar postData con la comuna seleccionada
        setPostData((prevState) => ({
            ...prevState,
            commune: selectedCommune,
        }));
    };



    const handleMarcaChange = (event) => {
        const selectedMarca = event.target.value;
        setSelectedMarca(selectedMarca);

        // Buscar la marca seleccionada en modelosjson
        const marcaEncontrada = modelosjson.find((marca) => marca.marca === selectedMarca);
        const modelos = marcaEncontrada ? marcaEncontrada.modelo : [];

        // Actualizar postData (igual que antes)
        setPostData((prevState) => ({
            ...prevState,
            marca: selectedMarca,
            modelo: modelos.length > 0 ? modelos[0] : "", // Primer modelo por defecto
        }));
    };

    // Generar opciones de MARCAS (igual que wilayasOptions)
    const marcasOptions = modelosjson.map((marca, index) => (
        <option key={index} value={marca.marca}>
            {marca.marca}
        </option>
    ));

    // Generar opciones de MODELOS (igual que communesOptions)
    const modelosOptions = selectedMarca
        ? modelosjson
            .find((marca) => marca.marca === selectedMarca)
            ?.modelo?.map((modelo, index) => (
                <option key={index} value={modelo}>
                    {modelo}
                </option>
            ))
        : [];

    // Manejador de cambio de MODELO (igual que handleCommuneChange)
    const handleModeloChange = (event) => {
        const selectedModelo = event.target.value;
        setPostData((prevState) => ({
            ...prevState,
            modelo: selectedModelo,
        }));
    };



    // 1. Estado único (según tu requerimiento)


    const handleMarcasChange = (event) => {
        const selectedMarca = event.target.value;
        setSelectedMarca(selectedMarca);

        // Buscar la marca seleccionada en modelosjson
        const marcaEncontrada = modelosjson.find((marcas) => marcas.marcas === selectedMarca);
        const modeloss = marcaEncontrada ? marcaEncontrada.modelos : [];

        // Actualizar postData (igual que antes)
        setPostData((prevState) => ({
            ...prevState,
            marcas: selectedMarca,
            modeloss: modeloss.length > 0 ? modeloss[0] : "", // Primer modelo por defecto
        }));
    };

    // Generar opciones de MARCAS (igual que wilayasOptions)
    const marcasOptionss = modelossjson.map((marcas, index) => (
        <option key={index} value={marcas.marcas}>
            {marcas.marcas}
        </option>
    ));

    // Generar opciones de MODELOS (igual que communesOptions)
    const modelosOptionss = selectedMarca
        ? modelossjson
            .find((marcas) => marcas.marcas === selectedMarca)
            ?.modelos?.map((modelos, index) => (
                <option key={index} value={modelos}>
                    {modelos}
                </option>
            ))
        : [];

    // Manejador de cambio de MODELO (igual que handleCommuneChange)
    const handleModelosChange = (event) => {
        const selectedModelo = event.target.value;
        setPostData((prevState) => ({
            ...prevState,
            modelos: selectedModelo,
        }));
    };




    const handleChangeInput = (e) => {
        const { name, value, type, checked } = e.target;

        setPostData(prevState => {
            const isCheckbox = type === "checkbox";
            const isAttribute = prevState.attributes && Object.prototype.hasOwnProperty.call(prevState.attributes, name);

            if (isAttribute) {
                return {
                    ...prevState,
                    attributes: {
                        ...prevState.attributes,
                        [name]: isCheckbox ? checked : value
                    }
                };
            } else {
                return {
                    ...prevState,
                    [name]: isCheckbox ? checked : value
                };
            }
        });
    };



    const handleFileChange = e => {
        const files = [...e.target.files]
        let err = ""
        let newImages = []

        files.forEach(file => {
            if (!file) return err = "File does not exist."

            if (file.size > 1024 * 1024 * 5) {
                return err = "The image/video largest is 5mb."
            }

            return newImages.push(file)
        })

        if (err) dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } })
        setImages([...images, ...newImages])
    }

    const deleteImage = (index) => {
        const newArr = [...images]
        newArr.splice(index, 1)
        setImages(newArr)
    }




    const handleSubmit = (e) => {
        e.preventDefault();
        if (!postData.wilaya || !postData.commune) {
            return dispatch({
                type: GLOBALTYPES.ALERT,
                payload: { error: "Por favor selecciona una wilaya y una comuna." },
            });
        }
        if (images.length === 0) {
            return dispatch({
                type: GLOBALTYPES.ALERT,
                payload: { error: "Por favor agrega una foto o video." },
            });
        }

        if (status.onEdit) {
            dispatch(updatePost({ postData, images, auth, status }));
        } else {
            dispatch(createPostAprove({ postData, images, auth, socket }));
        }

        setPostData(initilastate);
        setImages([]);

        dispatch({ type: GLOBALTYPES.STATUS, payload: false });
    };

    useEffect(() => {
        console.log("status en useEffect:", status);
        if (status?.onEdit) {
            setPostData({
                category: status.category || "",
                subCategory: status.subCategory || "",


                title: status.title || "",
                description: status.description || "",
                price: status.price || "",
                unidaddeprecio: status.unidaddeprecio || "",
                oferta: status.oferta || "",
                change: status.change || "",
                wilaya: status.wilaya || "",
                commune: status.commune || "",
                quartier: status.quartier || "",
                email: status.email || "",
                telefono: status.telefono || "",

                attributes: {
                    subCategory2: status.attributes?.subCategory2 || "",
                    title2: status.attributes?.title2 || "",
                    marque: status.attributes?.marque || "",
                    model: status.attributes?.model || "",
                    marca: status.attributes?.marque || "",
                    modelo: status.attributes?.model || "",
                    marcas: status.attributes?.marque || "",
                    modelos: status.attributes?.model || "",

                },
            });
            setImages(status.images || []);
            setSelectedWilaya(status.wilaya || "");


        }
    }, [status]);



    const marcastelefonos = () => (
        <div>
            <div className="form-group">
                <small className="text-primary">Selecciona la marca</small>
                <select
                    className="form-control"
                    name="marcas"
                    value={postData.marcas}
                    onChange={handleMarcasChange}
                >
                    <option value="">Sélectionnez une marque</option>
                    {marcasOptionss}
                </select>
            </div>

            <div className="form-group">
                <small className="text-primary">Selecciona el modelo</small>
                <select
                    className="form-control"
                    name="modelos"
                    value={postData.modelos}
                    onChange={handleModelosChange}
                >
                    <option value="">Sélectionnez le modèle</option>
                    {modelosOptionss}
                </select>
            </div></div>
    )

    const marcasvoitures = () => (
        <div>
            <div className="form-group">
                <small className="text-primary">Selecciona la marca</small>
                <select
                    className="form-control"
                    name="marca"
                    value={postData.marca}
                    onChange={handleMarcaChange}
                >
                    <option value="">Sélectionnez une marque</option>
                    {marcasOptions}
                </select>
            </div>

            <div className="form-group">
                <small className="text-primary">Selecciona el modelo</small>
                <select
                    className="form-control"
                    name="modelo"
                    value={postData.modelo}
                    onChange={handleModeloChange}
                >
                    <option value="">Sélectionnez le modèle</option>
                    {modelosOptions}
                </select>
            </div>
        </div>


    )







    const subcategoryy = () => (

       
            <div>
                <h2>Choisissez une catégorie</h2>
                <CategorySelect handleChangeInput={handleChangeInput} postData={postData} />

            </div>
       
    )

    const itemsÉlectroménagerÉlectroniquee = () => (
        <div>
            <ItemsElectromenagerElectronique handleChangeInput={handleChangeInput} postData={postData} />

        </div>
    )


    const itemsAutomobileVehicules = () => (
        <div>
            <ItemsAutomobileVehicules handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )
    const Subcategoryimmobilierr = () => (
        <div>
            <Subcategoryimmobilier handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )
    const ItemsImmobilierr = () => (
        <div>
            <ItemsImmobilier handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )
    const itemsInformatique = () => (
        <div>
            <ItemsInformatique handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )
    const itemsTéléphones = () => (
        <div>
            <ItemsTéléphones handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )
    const itemsVêtementsMode = () => (
        <div>
            <ItemsVêtementsMode handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )
    const itemsSantéBeauté = () => (
        <div>
            <ItemsSantéBeauté handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )

    const itemsMeublesMaison = () => (
        <div>
            <ItemsMeublesMaison handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )
    const itemsEmploi = () => (
        <div>
            <ItemsEmploi handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )
    /*    
       const itemsServices = () => (
           <div>
               <ItemsServices handleChangeInput={handleChangeInput} postData={postData} />
               <small className='text-danger'>Ce champ est requis</small>
           </div>
       )
       const itemsLoisirsDivertissements = () => (
           <div>
               <ItemsLoisirsDivertissements handleChangeInput={handleChangeInput} postData={postData} />
               <small className='text-danger'>Ce champ est requis</small>
           </div>
       )
       const itemsMatériauxÉquipement = () => (
           <div>
               <ItemsMatériauxÉquipement handleChangeInput={handleChangeInput} postData={postData} />
               <small className='text-danger'>Ce champ est requis</small>
           </div>
       )
       const itemssport = () => (
           <div>
               <Itemssport handleChangeInput={handleChangeInput} postData={postData} />
               <small className='text-danger'>Ce champ est requis</small>
           </div>
       )
       
   */
    const itemsServices = () => (
        <div>
            <Select
                style={{ display: "flex", alignItems: "flex-end" }}
                onChange={handleChangeInput}
                value={postData.title}
                name="title"
                className="form-control"
                required
            >
                <option value="">Sélectionner une sub catégorie</option>
                <option value="Construction & Travaux">Construction & Travaux</option>
                <option value="Écoles & Formations">Écoles & Formations</option>
                <option value="Industrie & Fabrication">Industrie & Fabrication</option>
                <option value="Transport et Déménagement">Transport et Déménagement</option>
                <option value="Décoration & Aménagement">Décoration & Aménagement</option>
                <option value="Publicité & Communication">Publicité & Communication</option>
                <option value="Nettoyage & Jardinage">Nettoyage & Jardinage</option>
                <option value="Froid & Climatisation">Froid & Climatisation</option>
                <option value="Traiteurs & Gâteaux">Traiteurs & Gâteaux</option>
                <option value="Médecine & Santé">Médecine & Santé</option>
                <option value="Réparation auto & Diagnostic">Réparation auto & Diagnostic</option>
            </Select>
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    );


    const itemsLoisirsDivertissements = () => (
        <div>
            <select
                style={{ display: "flex", alignItems: "flex-end" }}
                onChange={handleChangeInput}
                value={postData.title}
                name="title"
                className="form-control"
                required
            >
                <option value="">Sélectionner une sub catégorie</option>
                <option value="Animalerie">Animalerie</option>
                <option value="Consoles et Jeux Vidéos">Consoles et Jeux Vidéos</option>
                <option value="Livres & Magazines">Livres & Magazines</option>
                <option value="Instruments de Musique">Instruments de Musique</option>
                <option value="Les Jeux de loisirs">Les Jeux de loisirs</option>
                <option value="Jouets">Jouets</option>
                <option value="Chasse & Pêche">Chasse & Pêche</option>
                <option value="Jardinage">Jardinage</option>
                <option value="Antiquités & Collections">Antiquités & Collections</option>
                <option value="Barbecue & Grillades">Barbecue & Grillades</option>
                <option value="Vapes & Chichas">Vapes & Chichas</option>
            </select>
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    );


    const itemsMatériauxÉquipement = () => (
        <div>
            <select
                style={{ display: "flex", alignItems: "flex-end" }}
                onChange={handleChangeInput}
                value={postData.title}
                name="title"
                className="form-control"
                required
            >
                <option value="">Sélectionner une sub catégorie</option>
                <option value="Matériaux de construction">Matériaux de construction</option>
                <option value="Outillage et quincaillerie">Outillage et quincaillerie</option>
                <option value="Électricité et plomberie">Électricité et plomberie</option>
                <option value="Peinture et décoration">Peinture et décoration</option>
                <option value="Matériel professionnel">Matériel professionnel</option>
                <option value="Matériel médical">Matériel médical</option>
                <option value="Matériel de jardinage">Matériel de jardinage</option>
                <option value="Matériel de cuisine">Matériel de cuisine</option>
                <option value="Matériel de nettoyage">Matériel de nettoyage</option>
                <option value="Matériel de sécurité">Matériel de sécurité</option>
                <option value="Matériel de bureautique">Matériel de bureautique</option>
            </select>
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    );


    const itemsPiècesdétachées = () => (
        <div>
            <select
                style={{ display: "flex", alignItems: "flex-end" }}
                onChange={handleChangeInput}
                value={postData.title}
                name="title"
                className="form-control"
                required
            >
                <option value="">Sélectionner une sub catégorie</option>
                <option value="Pièces Automobiles">Pièces Automobiles</option>
                <option value="Pièces Véhicules">Pièces Véhicules</option>
                <option value="Alarme et sécurité">Alarme et sécurité</option>
                <option value="Lubrifiants">Lubrifiants</option>
                <option value="Nettoyage & Entretien">Nettoyage & Entretien</option>
                <option value="Pièces Moto">Pièces Moto</option>
                <option value="Outils de diagnostics">Outils de diagnostics</option>
                <option value="Pièces Bateaux">Pièces Bateaux</option>
            </select>
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    );


    const itemssport = () => (
        <div>
            <select
                style={{ display: "flex", alignItems: "flex-end" }}
                onChange={handleChangeInput}
                value={postData.title}
                name="title"
                className="form-control"
                required
            >
                <option value="">Sélectionner une sous-catégorie</option>
                <option value="Football">Football</option>
                <option value="Hand/Voley/Basket-Ball">Hand/Voley/Basket-Ball</option>
                <option value="Sport de combat">Sport de combat</option>
                <option value="Fitness - Musculation">Fitness - Musculation</option>
                <option value="Natation">Natation</option>
                <option value="Vélos et trottinettes">Vélos et trottinettes</option>
                <option value="Sports de raquette">Sports de raquette</option>
                <option value="Sport aquatiques">Sport aquatiques</option>
                <option value="Équitation">Équitation</option>
                <option value="Pétanque">Pétanque</option>
                <option value="Autres">Autres</option>
            </select>
            <small className="text-danger">Ce champ est requis</small>
        </div>
    );

    const title2 = () => (
        <div className='form-group'>
            <input type="text" name="title2" value={postData.attributes.title2} onChange={handleChangeInput} className="form-control" placeholder="Titre" />
        </div>
    )
    const marque = () => (
        <div className='form-group'>
            <input type="text" name="marque" value={postData.attributes.marque} onChange={handleChangeInput} className="form-control" placeholder="Marque" />
        </div>
    )
    const model = () => (
        <div className='form-group'>
            <input type="text" name="model" value={postData.attributes.model} onChange={handleChangeInput} className="form-control" placeholder="Model" />
        </div>
    )

    return (
        <div className='status_modal'  >
            <Form onSubmit={handleSubmit}>
                <div className="status_header">
                    <h5 className="m-0">Annonces Immobilière</h5>
                    <span onClick={() => dispatch({
                        type: GLOBALTYPES.STATUS, payload: false
                    })}>
                        &times;
                    </span>
                </div>

                <div className="form-group"   >
                    <input
                        className='form-control'
                        type="hidden"
                        name="category"
                        value={postData.category}
                        onChange={handleChangeInput}
                        placeholder="Category" />
                </div>
                <div  >
                    {subcategoryy()}
                </div>


                {postData.subCategory === "Électroménager & Électronique" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsÉlectroménagerÉlectroniquee()}
                        </div>

                    </div>
                )}



                {postData.subCategory === "Automobiles & Véhicules" && (
                    <div>
                        <div className="form-group">
                            {itemsAutomobileVehicules()}
                        </div>

                        {postData.title && (
                            <>
                                {postData.title === "Voitures" ? (
                                    marcasvoitures()
                                ) : (
                                    <>
                                        {title2()}
                                        {marque()}
                                        {model()}
                                    </>
                                )}
                            </>
                        )}

                    </div>
                )}



                {postData.subCategory === "Immobilier" && (
                    <div className="form-group">
                        {Subcategoryimmobilierr()}
                    </div>
                )}

                {(postData.attributes.subCategory2 === "Vente" ||
                    postData.attributes.subCategory2 === "Location" ||
                    postData.attributes.subCategory2 === "Location_Vacances") && (
                        <div className="form-group">
                            {ItemsImmobilierr()}
                        </div>
                    )}


                {postData.subCategory === "Informatique" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsInformatique()}
                        </div>



                    </div>
                )}


                {postData.subCategory === "Téléphones & Accessoires" && (
                    <div className='form-group'>

                        {itemsTéléphones()}


                        {postData.title && (
                            <>
                                {postData.title === "Smartphones" ? (
                                    marcastelefonos()
                                ) : (
                                    <>
                                        {title2()}
                                        {marque()}
                                        {model()}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                )}

                {postData.subCategory === "Vêtements & Mode" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsVêtementsMode()}
                        </div>



                    </div>
                )}

                {postData.subCategory === "Santé & Beauté" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsSantéBeauté()}
                        </div>



                    </div>
                )}
                {postData.subCategory === "Meubles & Maison" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsMeublesMaison()}
                        </div>
                        <div className="form-group"  >

                        </div>

                    </div>
                )}
                {postData.subCategory === "Emploi" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsEmploi()}
                        </div>


                    </div>
                )}

                {postData.subCategory === "Services" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsServices()}
                        </div>

                    </div>
                )}


                {postData.subCategory === "Loisirs & Divertissements" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsLoisirsDivertissements()}
                        </div>

                    </div>
                )}
                {postData.subCategory === "Matériaux & Équipement" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsMatériauxÉquipement()}
                        </div>

                    </div>
                )}
                {postData.subCategory === "Pièces détachées" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsPiècesdétachées()}
                        </div>

                    </div>
                )}

                {postData.subCategory === "Sport" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemssport()}
                        </div>

                    </div>
                )}























                <Form.Group controlId="descriptionTextarea" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="description"
                        value={postData.description}
                        onChange={handleChangeInput}
                        placeholder="Description..."
                        rows={5} // Puedes ajustar el número de filas
                        style={{ resize: 'vertical' }} // Opcional: permite redimensionar verticalmente
                    />
                </Form.Group>
                <div className="card-body form-group">
                    <label className="text-primary">Prix</label>
                    <div style={{ padding: '0 20px' }}>
                        <Slider
                            min={500}
                            max={2000000}
                            step={500}
                            value={postData.price || 0} // Si no hay precio, el slider empieza en 0
                            onChange={(value) => {
                                setPostData(prevState => ({
                                    ...prevState,
                                    price: value // Solo actualizamos el valor de 'price'
                                }));
                            }}
                            trackStyle={{ backgroundColor: '#44EB00', height: 10 }}
                            handleStyle={{
                                borderColor: '#00AF72',
                                height: 20,
                                width: 20,
                                marginLeft: -10,
                                marginTop: -5,
                                backgroundColor: '#007bff',
                            }}
                            railStyle={{ backgroundColor: '#ccc', height: 10 }}
                        />
                    </div>

                    <div style={{ marginTop: 10 }}>
                        {postData.price}
                    </div>
                </div>

                <Form.Group className="mb-3">
                    <Form.Label>Unité de prix</Form.Label>
                    <Select
                        name="unidaddeprecio"
                        value={priceUnitOptions.find(opt => opt.value === postData.unidaddeprecio)}
                        onChange={(selected) => handleChangeInput({
                            target: {
                                name: "unidaddeprecio",
                                value: selected.value
                            }
                        })}
                        options={priceUnitOptions}
                        placeholder="Unité de prix"
                        classNamePrefix="select"
                    />
                </Form.Group>

                {/* Select de react-select para Type D'offre */}
                <Form.Group className="mb-3">
                    <Form.Label>Type D'offre</Form.Label>
                    <Select
                        name="oferta"
                        value={offerTypeOptions.find(opt => opt.value === postData.oferta)}
                        onChange={(selected) => handleChangeInput({
                            target: {
                                name: "oferta",
                                value: selected.value
                            }
                        })}
                        options={offerTypeOptions}
                        placeholder="Type D'offre"
                        classNamePrefix="select"
                    />
                </Form.Group>


                <div className="form-group">

                    <Select
                        multiple={false}
                        name="change"
                        value={postData.change}
                        onChange={handleChangeInput}

                    >
                        <option  >Change</option>

                        <option value="J'accepte l'échange">J'accepte l'échange</option>
                        <option value="Pas d'échanges">Pas d'échanges </option>

                    </Select>
                </div>








                <div className="form-group">
                    <small className="text-primary">Adresse du bien obligatoire</small>
                    <Select
                        multiple={false}

                        name="wilaya"
                        value={postData.wilaya} // Usar postData.wilaya
                        onChange={handleWilayaChange}
                    >
                        <options value="">Sélectionnez une wilaya</options>
                        {wilayasOptions} {/* Opciones de wilayas */}
                    </Select>
                    <small className="text-danger">Ce champ est requis</small>



                    <Select
                        multiple={false}

                        name="commune"
                        value={postData.commune} // Usar postData.commune
                        onChange={handleCommuneChange}
                    >
                        <option value="">Sélectionnez la commune</option>
                        {communesOptions} {/* Opciones de communes */}
                    </Select>
                    <small className="text-danger">Ce champ est requis</small>


                    <Form.Group controlId="quartierInput" className="mb-3">
                        <Form.Label>Quartier</Form.Label>
                        <Form.Control
                            type="text"
                            name="quartier"
                            value={postData.quartier}
                            onChange={handleChangeInput}
                            placeholder="Ej: Manhattan"
                            isInvalid={!postData.quartier}  // Validación opcional
                        />
                        <Form.Control.Feedback type="invalid">
                            Este campo es requerido.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="telefonoInput" className="mb-3">
                        <Form.Label>Téléphone</Form.Label>
                        <Form.Control
                            type="number"
                            name="telefono"
                            value={postData.telefono}
                            onChange={handleChangeInput}
                            placeholder="Téléphone"
                        />
                    </Form.Group>


                    <Form.Group controlId="emailInput" className="mb-3">
                        <Form.Label>Adresse mail</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={postData.email}
                            onChange={handleChangeInput}
                            placeholder="Adresse mail"
                            isInvalid={!postData.email} // Validación si está vacío
                        />
                        <Form.Control.Feedback type="invalid">
                            Ce champ est requis
                        </Form.Control.Feedback>
                    </Form.Group>

                </div>

                <div className="p-3">
                    <div className="status_body">
                        {/* Área para mostrar imágenes */}
                        <div className="show_images">
                            {images.map((img, index) => (
                                <div key={index} id="file_img">
                                    {img.type === 'image' ? (
                                        <img
                                            src={img.preview}
                                            alt="Preview"
                                            style={{ maxHeight: '100px' }}
                                        />
                                    ) : (
                                        <video
                                            src={img.preview}
                                            controls
                                            style={{ maxHeight: '100px' }}
                                        />
                                    )}
                                    <span onClick={() => deleteImage(index)}>
                                        <FaTimes />
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Botón de subida */}
                        <div className="input_images">
                            <div className="file_upload">
                                <FaImage className="mr-2" style={{ fontSize: '2rem', cursor: 'pointer' }} />
                                <input
                                    type="file"
                                    id="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    multiple
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                />
                                <button
                                    onClick={() => fileInputRef.current.click()}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'inherit',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Seleccionar imágenes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>




                <Button type="submit">Enviar</Button>
            </Form>

        </div >
    )
}

export default StatusModal
