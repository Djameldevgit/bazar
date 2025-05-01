import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { imageShow, videoShow } from '../utils/mediaShow';
import { GLOBALTYPES } from '../redux/actions/globalTypes';

import { Form  } from 'react-bootstrap';
import modelosjson from "../json/modelos.json"
import communesjson from "../json/communes.json"
import { createPostAprove, updatePost } from '../redux/actions/postAproveAction';
import modelossjson from "../json/telefonos.json"
 
import 'rc-slider/assets/index.css';  // Importar los estilos predeterminados
import { CategorySelect } from './ReactIcons';
 
import { ItemsElectromenagerElectronique } from './ReactIcons';
import { ItemsAutomobileVehicules } from './ReactIcons';
 
import { ItemsImmobilier } from './ReactIcons';
import { ItemsInformatique } from './ReactIcons';
import { ItemsTéléphones } from './ReactIcons';
import { ItemsVêtementsMode } from './ReactIcons';
import { ItemsSantéBeauté } from './ReactIcons';
import { ItemsMeublesMaison } from './ReactIcons';
import { ItemsEmploi } from './ReactIcons';
import { ItemsServices } from './ReactIcons';
import { ItemsLoisirsDivertissements } from './ReactIcons';
import { ItemsMatériauxÉquipement } from './ReactIcons';
import { ItemsPiècesdétachées } from './ReactIcons';
import { Itemssport } from './ReactIcons';
import { Annee, Color, Optionduvoiture } from './Attrubutes';
 


const StatusModal = () => {
    const { auth, theme, socket, status, } = useSelector((state) => state);
    const changeTypeOptions = [
        { value: "J'accepte l'échange", label: "J'accepte l'échange" },
        { value: "Pas d'échanges", label: "Pas d'échanges" }
    ];
    const offerTypeOptions = [
        { value: "J'accepte l'échange", label: "J'accepte l'échange" },
        { value: "Pas d'échanges", label: "Pas d'échanges" },

    ];
    const priceUnitOptions = [
        { value: 'DA', label: 'DA' },
        { value: 'Millions', label: 'Millions' },
        { value: 'Milliard', label: 'Milliard' },
        { value: 'Euros', label: 'Euros' },
    ];

    const grosdetailOptions = [
        { value: 'Grossiste', label: 'Grossiste' },
        { value: 'Détails', label: 'Détails' },
        { value: 'En Détails seulement', label: 'En Détails seulement' },
        { value: 'En Gros seulement', label: 'En Gros seulement' }
    ];

    const locatioventevetemeness = [
        { value: 'à vendre', label: 'à vendre' },
        { value: 'location', label: 'location' },
        { value: 'à vendre ou location', label: 'à vendre ou location' }
    ];
    const papiersOption = [
        { value: "Carte Gris / Safia", label: "Carte Gris / Safia" },
        { value: "Carte Jaune", label: "Carte Jaune" },
        { value: "Licence / Délai", label: "Licence / Délai" }
    ];
    const subcategory3 = () => (
        <div className="form-group">
            <select name="subCategory2" value={postData.subCategory2} onChange={handleChangeInput} className="form-control" required>
                <option value="">Catégorie...</option>
                <option value="Vente">Vente</option>
                <option value="Location">Location</option>
                <option value="Location_Vacances">Location pour Vacances</option>
                <option value="Echange">Echange</option>
                <option value="Cherche_Location">Cherche Location</option>
                <option value="Cherche_Achat">Cherche Achat</option>
            </select>
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )

    const dispatch = useDispatch()

    const initilastate = {

        category: "",
        subCategory: "",

        title: "",
        marque: "",
        model: "",
        marca: "",
        modelo: "",
        marcas: "",
        modelos: "",
        subCategory2:"",
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

            superficie: "",
            etage: "",
            piece: "",
            anne: "",
            color: "",
            motor: "",
            grosdetailOptions: "",
            locatioventevetemenes: "",
            optionduvoiture: "",
            papiers: "",
        }
    }


    const [postData, setPostData] = useState(initilastate)
    const [images, setImages] = useState([])
    const [selectedWilaya, setSelectedWilaya] = useState("");
    const [selectedMarca, setSelectedMarca] = useState("");
    const [selectedMarcaSmartphone, setSelectedMarcaSmartphone] = useState("");

    const [stream, setStream] = useState(false)
    const videoRef = useRef()
    const refCanvas = useRef()
    const [tracks, setTracks] = useState('')

    const handleStream = () => {
        setStream(true)
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(mediaStream => {
                    videoRef.current.srcObject = mediaStream
                    videoRef.current.play()

                    const track = mediaStream.getTracks()
                    setTracks(track[0])
                }).catch(err => console.log(err))
        }
    }

    const handleCapture = () => {
        const width = videoRef.current.clientWidth;
        const height = videoRef.current.clientHeight;

        refCanvas.current.setAttribute("width", width)
        refCanvas.current.setAttribute("height", height)

        const ctx = refCanvas.current.getContext('2d')
        ctx.drawImage(videoRef.current, 0, 0, width, height)
        let URL = refCanvas.current.toDataURL()
        setImages([...images, { camera: URL }])
    }

    const handleStopStream = () => {
        tracks.stop()
        setStream(false)
    }


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



    const handleChangeImages = e => {
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

                    superficie: status.attributes?.superficie || "",
                    etage: status.attributes?.etage || "",
                    piece: status.attributes?.piece || "",
                    anne: status.attributes?.anne || "",
                    color: status.attributes?.color || "",
                    motor: status.attributes?.motor || "",
                    grosdetailOptions: status.attributes?.grosdetailOptions || "",
                    locatioventevetemenes: status.attributes?.locatioventevetemenes || "",
                    optionduvoiture: status.attributes?.optionduvoiture || "",
                    papiers: status.attributes?.papiers || "",
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


    const wilayascommunes = () => (
        <div>
            <div className="form-group">
                <small className="text-primary">Adresse du bien obligatoire</small>
                <select
                    className="form-control"
                    name="wilaya"
                    value={postData.wilaya}
                    onChange={handleWilayaChange}
                >
                    <options value="">Sélectionnez une wilaya</options>    {wilayasOptions}
                </select>
            </div>

            <div className="form-group">

                <select
                    className="form-control"
                    name="commune"
                    value={postData.commune}
                    onChange={handleCommuneChange}
                >
                    <option value="">Sélectionnez le modèle</option>
                    {communesOptions}
                </select>
            </div>
        </div>


    ) 
    const  categoryselectt  = () => (
        <div>
            < CategorySelect  handleChangeInput={handleChangeInput} postData={postData} />

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
    
    const ItemsImmobilierr = () => (
        <div>
            <ItemsImmobilierr handleChangeInput={handleChangeInput} postData={postData} />

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


    const itemsPiècesdétachées = () => (
        <div>
            <ItemsPiècesdétachées handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )





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
    const superficie = () => (
        <div className='form-group'>
            <input type="text" name="superficie" value={postData.attributes.superficie} onChange={handleChangeInput} className="form-control" placeholder="Model" />
        </div>
    )
    const etage = () => (
        <div className='form-group'>
            <input type="text" name="etage" value={postData.attributes.etage} onChange={handleChangeInput} className="form-control" placeholder="Model" />
        </div>
    )
    const piece = () => (
        <div className='form-group'>
            <input type="text" name="piece" value={postData.attributes.piece} onChange={handleChangeInput} className="form-control" placeholder="piece" />
        </div>
    )

    const annee = () => (
        <div className='form-group'>
            <Annee handleChangeInput={handleChangeInput} postData={postData} />
        </div>
    )
    const colorr = () => (
        <Color handleChangeInput={handleChangeInput} postData={postData} />
    )

    const motorr = () => (
        <div className='form-group'>
            <input type="text" name="motor" value={postData.attributes.motor} onChange={handleChangeInput} className="form-control" placeholder="Moteur" />
        </div>
    )
    const optionnduvoitures = () => (
        <Optionduvoiture postData={postData} setPostData={setPostData} />
    )
    const locationventevetementsss = () => (
        <Form.Group className="mb-3">
            <Form.Label>Location / Vente</Form.Label>
            <Select
                name="locatioventevetemenes"
                value={locatioventevetemeness.find(opt => opt.value === postData.attributes.locatioventevetemenes)}
                onChange={(selected) => handleChangeInput({
                    target: {
                        name: "locatioventevetemenes",
                        value: selected.value
                    }
                })}
                options={locatioventevetemeness}
                placeholder="Location / vente"
                classNamePrefix="select"
            />
        </Form.Group>
    )
    const grosdetails = () => (
        <Form.Group className="mb-3">
            <Form.Label>Gros / Détails</Form.Label>
            <Select
                name="grosdetailOptions"
                value={grosdetailOptions.find(opt => opt.value === postData.attributes.grosdetailOptions)}
                onChange={(selected) => handleChangeInput({
                    target: {
                        name: "grosdetailOptions",
                        value: selected.value
                    }
                })}
                options={grosdetailOptions}
                placeholder="Gros / Détails"
                classNamePrefix="select"
            />
        </Form.Group>
    )
    const papierss = () => (

        <Form.Group className="mb-3">
            <Form.Label>Papiers</Form.Label>
            <Select
                name="papiers"
                value={papiersOption.find(opt => opt.value === postData.attributes.papiersOption)}
                onChange={(selected) => handleChangeInput({
                    target: {
                        name: "papiers",
                        value: selected.value
                    }
                })}
                options={papiersOption}
                placeholder="Papiers"
                classNamePrefix="select"
            />
        </Form.Group>

    )

    return (
        <div className='status_modal'>
            <Form onSubmit={handleSubmit}>
                <div className="status_header">
                    <h5 className="m-0">Annonces Immobilière</h5>
                    <span onClick={() => dispatch({
                        type: GLOBALTYPES.STATUS, payload: false
                    })}>
                        &times;
                    </span>
                </div>
               
                  
                        <div className="form-group">
                        {categoryselectt()}
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
              

                {postData.subCategory === "Électroménager & Électronique" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsÉlectroménagerÉlectroniquee()}
                        </div>
                        <>
                            {title2()}
                        </>
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
                                    <>
                                        {marcasvoitures()}
                                        {annee()}
                                        {motorr()}
                                        {colorr()}
                                        {optionnduvoitures()}
                                        {papierss()}
                                    </>
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
                    <div>
                        <div className="form-group">
                            {subcategory3()}
                        </div>

                        
                           
                                {postData.subCategory2 === "Vente" ? (
                                    <>
                                    {ItemsImmobilier()}
                                    </>
                                ) : (
                                    <>
                                     
                                       
                                        


                                    </>
                                )}
                           
                     

                    </div>
                )}









                {postData.subCategory === "Informatique" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsInformatique()}
                        </div>
                        <>
                            {title2()}

                        </>


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
                                        {colorr()}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                )}

                {postData.subCategory === "Vêtements & Mode" && (
                    <div className='form-group'>

                        {itemsVêtementsMode()}

                        <div className="form-group">
                            <>
                                {title2()}
                                {locationventevetementsss()}
                                {grosdetails()}
                                {colorr()}
                            </>
                        </div>


                    </div>
                )}

                {postData.subCategory === "Santé & Beauté" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsSantéBeauté()}
                        </div>
                        <div className="form-group">
                            <>
                                {title2()}

                            </>
                        </div>


                    </div>
                )}
                {postData.subCategory === "Meubles & Maison" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsMeublesMaison()}
                        </div>
                        <>
                            {title2()}

                        </>

                    </div>
                )}
                {postData.subCategory === "Emploi" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsEmploi()}
                        </div>
                        <>
                            {title2()}

                        </>

                    </div>
                )}

                {postData.subCategory === "Services" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsServices()}
                        </div>
                        <>
                            {title2()}

                        </>
                    </div>
                )}


                {postData.subCategory === "Loisirs & Divertissements" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsLoisirsDivertissements()}
                        </div>
                        <>
                            {title2()}

                        </>
                    </div>
                )}
                {postData.subCategory === "Matériaux & Équipement" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsMatériauxÉquipement()}
                        </div>
                        <>
                            {title2()}

                        </>
                    </div>
                )}
                {postData.subCategory === "Pièces détachées" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemsPiècesdétachées()}
                        </div>
                        <>
                            {title2()}

                        </>
                    </div>
                )}

                {postData.subCategory === "Sport" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {itemssport()}
                        </div>
                        <>
                            {title2()}

                        </>
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

                <Form.Group controlId="numberInput" className="mb-3">
                    <Form.Label>Prix</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={postData.price}
                        onChange={handleChangeInput}
                        placeholder="Prix"
                    />

                </Form.Group>

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


                <Form.Group className="mb-3">
                    <Form.Label>Change</Form.Label>

                    <Select
                        name="change"
                        value={changeTypeOptions.find(opt => opt.value === postData.change)}
                        onChange={(selected) => handleChangeInput({
                            target: {
                                name: "change",
                                value: selected.value
                            }
                        })}
                        options={changeTypeOptions}
                        placeholder="Change"
                        classNamePrefix="select"
                    />

                </Form.Group>






                <div>
                    {wilayascommunes()}
                </div>



                <Form.Group controlId="numberInput" className="mb-3">
                    <Form.Label>Quartier</Form.Label>
                    <Form.Control
                        type="text"
                        name="quartier"
                        value={postData.quartier}
                        onChange={handleChangeInput}
                        placeholder="Quartier"
                    />

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
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={postData.email}
                        onChange={handleChangeInput}
                        placeholder="Adresse mail"
                    />

                </Form.Group>


                <div className="status_body">

                    <div className="show_images">
                        {
                            images.map((img, index) => (
                                <div key={index} id="file_img">
                                    {
                                        img.camera ? imageShow(img.camera, theme)
                                            : img.url
                                                ? <>
                                                    {
                                                        img.url.match(/video/i)
                                                            ? videoShow(img.url, theme)
                                                            : imageShow(img.url, theme)
                                                    }
                                                </>
                                                : <>
                                                    {
                                                        img.type.match(/video/i)
                                                            ? videoShow(URL.createObjectURL(img), theme)
                                                            : imageShow(URL.createObjectURL(img), theme)
                                                    }
                                                </>
                                    }
                                    <span onClick={() => deleteImage(index)}>&times;</span>
                                </div>
                            ))
                        }
                    </div>

                    {
                        stream &&
                        <div className="stream position-relative">
                            <video autoPlay muted ref={videoRef} width="100%" height="100%"
                                style={{ filter: theme ? 'invert(1)' : 'invert(0)' }} />

                            <span onClick={handleStopStream}>&times;</span>
                            <canvas ref={refCanvas} style={{ display: 'none' }} />
                        </div>
                    }

                    <div className="input_images">
                        {
                            stream
                                ? <i className="fas fa-camera" onClick={handleCapture} />
                                : <>
                                    <i className="fas fa-camera" onClick={handleStream} />

                                    <div className="file_upload">
                                        <i className="fas fa-image" />
                                        <input type="file" name="file" id="file"
                                            multiple accept="image/*,video/*" onChange={handleChangeImages} />
                                    </div>
                                </>
                        }



                    </div>

                    <div className="status_footer">
                        <button className="btn btn-secondary w-100" type="submit">
                            Post
                        </button>
                    </div>

                </div>

            </Form>


        </div >
    )
}

export default StatusModal
