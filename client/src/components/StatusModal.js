import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { imageShow, videoShow } from '../utils/mediaShow';
import { GLOBALTYPES } from '../redux/actions/globalTypes';

import { Form } from 'react-bootstrap';
import modelosjson from "../json/modelos.json"
import communesjson from "../json/communes.json"
import { createPostAprove, updatePost } from '../redux/actions/postAproveAction';
import modelossjson from "../json/telefonos.json"

import { Title2Input, MarqueInput, ModelInput } from './automobile';
import {
    CategorySelect, SubcategorySelectWithIcons, ItemsElectromenagerElectronique, ItemsAutomobileVehicules, ItemsInformatique,
    ItemsTéléphones, ItemsVêtementsMode, ItemsSantéBeauté, ItemsMeublesMaison, ItemsEmploi, ItemsServices,
    ItemsLoisirsDivertissements, ItemsMatériauxÉquipement, ItemsPiècesdétachées, Itemssport, Voyage, ItemsImmobilier, ItemsLocationVacance
} from './ReactIcons';

import {
    SuperficieInput,
    EtageInput,
    PieceInput
} from './immobilier'; // Cambia por la ruta real


import getInitialState, { Annee, Color, Optionduvoiture, Opcionlagagehotel, Opciontipodehabitaciones, Optionservicehotel } from './Attrubutes';
import { TransporteUtilizado, DestinacionHadjOmra, ViajesNacionales, ViajesInterNacionales, } from './Voyagee';


import { Programme } from './Voyagee'; // Ajusta el path si es necesario
import {
    Description, PrixInput,
    UnitePrixSelect,
    TypeOffreSelect,
    ChangeSelect, QuartierInput,
    TelephoneInput,
    EmailInput,

    MarcaVoiture,
    WilayaCommune,
    MarcaTelefono
} from './StatusModalComponents';


const StatusModal = () => {
    MarcaTelefono
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




    const SubcategorySelectWithIconss = () => (
        <SubcategorySelectWithIcons
            postData={postData}
            handleChangeInput={handleChangeInput}
        />

    )

    const dispatch = useDispatch()

    const [postData, setPostData] = useState(getInitialState());


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

                destinacionhadj: status.destinacionhadj || "",

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

                    specifications: status.specifications || [],

                    numerodeapartamientos: status.numerodeapartamientos || "",

                    promoteurimmobilier: status.promoteurimmobilier || false,


                    nombre: status.nombre || "",

                    nombreChambres: status.nombreChambres || "",
                    tipodehabitacioness: status.tipodehabitacioness || "",
                    estrellas: status.estrellas || "",
                    reservationEnLigne: status.reservationEnLigne || "",
                    serviciosdehotel: status.serviciosdehotel || [],
                    langage: status.langage || [],
                    tipodehabutaciones: status.tipodehabutaciones || [],

                    nightlyRate: status.nightlyRate || "",
                    hotelWebsite: status.hotelWebsite || "",
                    checkInTime: status.checkInTime || "",

                    horadudepar: status.horadudepar || "",
                    datedepar: status.datedepar || "",
                    duracionviaje: status.duracionviaje || "",
                    estrellas: status.estrellas || "",
                    transporte: status.transporte || "",
                    destinacionvoyage1: status.destinacionvoyage1 || "",
                    destinacionvoyage2: status.destinacionvoyage2 || "",
                    voyage1hotel1: status.voyage1hotel1 || "",
                    voyage1hotel2: status.voyage1hotel2 || "",
                    voyage1nombrehotel1: status.voyage1nombrehotel1 || "",
                    voyage1nombrehotel2: status.voyage1nombrehotel2 || "",
                    fecharegreso: status.fecharegreso || "",
                    serviciosdelhotel: status.serviciosdelhotel || "",
                    cancelarreserva: status.cancelarreserva || "",



                },
            });
            setImages(status.images || []);
            setSelectedWilaya(status.wilaya || "");


        }
    }, [status]);



    const marcastelefonos = () => (
        <MarcaTelefono
            postData={postData}
            handleMarcasChange={handleMarcasChange}
            handleModelosChange={handleModelosChange}
            marcasOptionss={marcasOptionss}
            modelosOptionss={modelosOptionss}
        />
    )

    const marcasvoitures = () => (
        <MarcaVoiture
            postData={postData}
            handleMarcaChange={handleMarcaChange}
            handleModeloChange={handleModeloChange}
            marcasOptions={marcasOptions}
            modelosOptions={modelosOptions}
        />
    )


    const wilayascommunes = () => (
        <WilayaCommune
            postData={postData}
            handleWilayaChange={handleWilayaChange}
            handleCommuneChange={handleCommuneChange}
            wilayasOptions={wilayasOptions}
            communesOptions={communesOptions}
        />
    )
    const categoryselectt = () => (
        <div>
            < CategorySelect handleChangeInput={handleChangeInput} postData={postData} />

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

    const ItemsImmobilierrr = () => (
        <div>
            <ItemsImmobilier handleChangeInput={handleChangeInput} postData={postData} />

            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )

    const ItemsLocationVacancee = () => (
        <div>
            <ItemsLocationVacance handleChangeInput={handleChangeInput} postData={postData} />

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
    const ItemsVoyage = () => (
        <div>
            <Voyage handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )




    const title2 = () => (
        <Title2Input postData={postData} handleChangeInput={handleChangeInput} />
    )
    const marque = () => (
        <MarqueInput postData={postData} handleChangeInput={handleChangeInput} />
    )
    const model = () => (
        <ModelInput postData={postData} handleChangeInput={handleChangeInput} />
    )
    const superficie = () => (
        <SuperficieInput postData={postData} handleChangeInput={handleChangeInput} />

    )
    const etage = () => (

        <EtageInput postData={postData} handleChangeInput={handleChangeInput} />

    )
    const piece = () => (

        <PieceInput postData={postData} handleChangeInput={handleChangeInput} />
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
        <LocationVenteVetements
            postData={postData}
            handleChangeInput={handleChangeInput}
            locatioventevetemeness={locatioventevetemeness}
        />


    )
    const grosdetails = () => (

        <GrosDetails
            postData={postData}
            handleChangeInput={handleChangeInput}
            grosdetailOptions={grosdetailOptions}
        />


    )
    const papierss = () => (

        <PapiersSelect
            postData={postData}
            handleChangeInput={handleChangeInput}
            papiersOption={papiersOption}
        />

    )




    const destinacionhadjomraa = () => (
        <DestinacionHadjOmra value={postData.destinacionhadjomra} onChange={handleChangeInput} />
    )

    const transport = () => (
        <TransporteUtilizado value={postData.transporte} onChange={handleChangeInput} />
    )
    const viajesnacionaless = () => (
        <ViajesNacionales value={postData.viajesnacionales} onChange={handleChangeInput} />
    )
    const viajesInternacionaless = () => (
        <ViajesInterNacionales value={postData.viajesinternacionales} onChange={handleChangeInput} />
    )
    const opcionesservicehotel = () => (
        <Optionservicehotel postData={postData} setPostData={setPostData} />
    )
    const opcioneshabitacioness = () => (
        <Opciontipodehabitaciones postData={postData} setPostData={setPostData} />
    )
    const opcioneslanguagehotell = () => (
        <Opcionlagagehotel postData={postData} setPostData={setPostData} />
    )






    const incluidosenelprecio = () => (
        <div className="form-group">
        </div>
    )
    const condicionesdeanulacion = () => (
        <div className="form-group">
        </div>
    )

    const contactodereservacion = () => (
        <div className="form-group">
        </div>

    )
    const programmee = () => (
        <Programme postData={postData} handleChangeInput={handleChangeInput} />
    )
    const descriptions = () => (
        < Description postData={postData} handleChangeInput={handleChangeInput} />
    )
    const price = () => (
        <PrixInput postData={postData} handleChangeInput={handleChangeInput} />
    )
    const unityprice = () => (<UnitePrixSelect postData={postData} handleChangeInput={handleChangeInput} priceUnitOptions={priceUnitOptions} />
    )

    const ofre = () => (
        <TypeOffreSelect postData={postData} handleChangeInput={handleChangeInput} offerTypeOptions={offerTypeOptions} />
    )

    const change = () => (<ChangeSelect postData={postData} handleChangeInput={handleChangeInput} changeTypeOptions={changeTypeOptions} />
    )
    const quartier = () => (
        <QuartierInput postData={postData} handleChangeInput={handleChangeInput} />

    )

    const telefono = () => (

        <TelephoneInput postData={postData} handleChangeInput={handleChangeInput} />

    )

    const email = () => (

        <EmailInput postData={postData} handleChangeInput={handleChangeInput} />
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

                {postData.subCategory === "Immobilier" && (
                    <div>
                        <SubcategorySelectWithIconss />

                        {(postData.subCategory3 === "Vente" || postData.subCategory3 === "Location" || postData.subCategory3 === "Echange" || postData.subCategory3 === "Cherche_Location" || postData.subCategory3 === "Cherche_Achat") && (
                            <>

                                <ItemsImmobilierrr />
                            </>
                        )}

                        {postData.subCategory3 === "Location_Vacances" && (
                            <div>
                                <ItemsLocationVacancee />





                            </div>

                        )}

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

                {postData.subCategory === "Voyage" && (
                    <div className='form-group'>
                        <div className="form-group">
                            {ItemsVoyage()}
                        </div>
                        <>
                            {destinacionhadjomraa()}
                            {opcioneshabitacioness()}
                            {opcioneslanguagehotell()}
                            {opcioneslanguagehotell()}
                            {transport()}
                            {viajesnacionaless()}
                            {viajesInternacionaless()}


                            {programmee()}
                        </>
                    </div>
                )}




                {superficie()}


                {etage()}



                {piece()}




                <div>
                    {descriptions()}
                </div>


                <div>
                    {wilayascommunes()}
                </div>
                <div>
                    {price()}
                </div>
                <div>
                    {unityprice()}
                </div>

                <div>
                    {ofre()}
                </div>
                <div>
                    {change()}
                </div>
                <div>
                    {quartier()}
                </div>
                <div>
                    {telefono()}
                </div>
                <div>
                    {email()}
                </div>
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
