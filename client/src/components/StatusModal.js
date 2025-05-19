import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { imageShow, videoShow } from '../utils/mediaShow';
import { GLOBALTYPES } from '../redux/actions/globalTypes';

import { Form } from 'react-bootstrap';

import communesjson from "../json/communes.json"
import { createPostAprove, updatePost } from '../redux/actions/postAproveAction';

import { ItemsCategory } from './categorias/CategorySelect';
import { ItemsSubCategorySculpture } from './categorias/Sculpture';
import { ItemsSubCategoryPhotographie } from './categorias/Potography';
import { ItemsSubCategoryDesign } from './categorias/Desing'
import { ItemsSubCategoryGravures } from './categorias/GravuresEstampes';
import { ItemsSubCategoryArtsNumeriques } from './categorias/ArtNumirique';
 
import { DescriptionInput } from './categorias/Descriptionn';


import {  ItemsSubCategoryCollages } from './categorias/Collage';
import { ItemsSubCategoryArtTextile } from './categorias/ArtTextile';

import { ItemsSubCategoryStyle } from './categorias/Style';
import { ItemsSubCategoryTheme } from './categorias/Theme';
import { MesureInput } from './categorias/Mesure';

import { UniteMesure } from './categorias/UniteMesure';
import { Envolverlaobra } from './categorias/EnvolverObra';

import { PriceInput } from './categorias/Prix';
import { DeviseVente } from './categorias/DeviseUnity'
import { TalleSelect } from './categorias/Talle';

//import { ArtistLocationInput } from './categorias/LocalizacionArtiste';
import { VenteOptionsSelect } from './categorias/OptionDeVente';
import { ItemsSubCategoryPeinture } from './categorias/Peinture';

import {WilayaCommune} from './StatusModalComponents';





const StatusModal = () => {
     
    const { auth, theme, socket, status, } = useSelector((state) => state);


    const dispatch = useDispatch()
    const initialState = {
        category: '',
        subcategory: '',
        envolverobra: '',
        /*   subCategoryArtsNumeriques:'', 
        subCategoryPeinture:'',   
        subCategorySculpture:'',
           subCategoryPhotographie:'',
           subCategoryArtTextile:'',
           subCategoryCollages:'',
           subCategoryDesign:'',
           subCategoryDessin:'',
          subCategoryGravures:'',
  
          */
        measurementValue: '',
        venteOption: '',

        price: '',

        artStyle: '',
        subCategorytalle: '',
        theme: '',
        measurementUnit: '',
        description:'',
        wilaya: "",
        commune: "",
    }




    // 2. Función para cambiar dinámicamente la categoría (opcional, si la necesitas)
    const [postData, setPostData] = useState(initialState);
    const [images, setImages] = useState([])
    const [selectedWilaya, setSelectedWilaya] = useState("");

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

        setPostData(initialState);
        setImages([]);

        dispatch({ type: GLOBALTYPES.STATUS, payload: false });
    };

    useEffect(() => {

        if (status?.onEdit) {
            setPostData({
                category: status.category || "",
                subcategory: status.subcategory || "",
                /*
                subCategoryArtsNumeriques: status.subCategoryArtsNumeriques || "",
                subCategoryArtTextile: status.subCategoryArtTextile || "",
                subCategoryCollages: status.subCategoryCollages || "",
                subCategoryDesign: status.subCategoryDesign || "",
                subCategoryDessin: status.subCategoryDessin || "",
                subCategoryPeinture: status.subCategoryPeinture || "",
                subCategoryPhotographie: status.subCategoryPhotographie || "",
*/
                measurementValue: status.measurementValue || "",
                venteOption: status.venteOption || "",
                price: status.price || "",
                subCategorySculpture: status.telefono || "",
                envolverobra: status.envolverobra || "",
                artStyle: status.artStyle || "",
                theme: status.theme || "",
                measurementUnit: status.measurementUnit || "",
                description: status.description || "",
                wilaya: status.wilaya || "",
                commune: status.commune || "",

            });
            setImages(status.images || []);
            setSelectedWilaya(status.wilaya || "");

        

        }
    }, [status]);



    const ItemsCategoryy = () => (
        <ItemsCategory handleChangeInput={handleChangeInput} postData={postData}

        />
    )

    const ItemsSubCategoryPeinturee = () => (
        <ItemsSubCategoryPeinture handleChangeInput={handleChangeInput} postData={postData}

        />
    )

    const ItemsSubCategorySculpturee = () => (
        <div>
            < ItemsSubCategorySculpture handleChangeInput={handleChangeInput} postData={postData} />

        </div>
    )

    const ItemsSubCategoryPhotographiee = () => (
        <div>
            <ItemsSubCategoryPhotographie handleChangeInput={handleChangeInput} postData={postData} />

        </div>
    )



    const ItemsSubCategoryDesignn = () => (
        <div>
            <ItemsSubCategoryDesign handleChangeInput={handleChangeInput} postData={postData} />
            <small className='text-danger'>Ce champ est requis</small>
        </div>
    )
    const ItemsSubCategoryGravuress = () => (
        <ItemsSubCategoryGravures
            postData={postData}
            handleChangeInput={handleChangeInput}

        />)



    const ItemsSubCategoryArtsNumeriquess = () => (
        <div>
            <ItemsSubCategoryArtsNumeriques handleChangeInput={handleChangeInput} postData={postData} />

        </div>
    )

    const ItemsSubCategoryCollagess = () => (
        <div>
            <ItemsSubCategoryCollages handleChangeInput={handleChangeInput} postData={postData} />

        </div>
    )
    const MesureInputt = () => (
        <div>
            <MesureInput handleChangeInput={handleChangeInput} postData={postData} />

        </div>
    )
    const UniteMesuree = () => (
        <div>
            <UniteMesure handleChangeInput={handleChangeInput} postData={postData} />

        </div>
    )

    const Envolverlaobraa = () => (
        <div>
            <Envolverlaobra handleChangeInput={handleChangeInput} postData={postData} />

        </div>
    )




    const Descriptionnn = () => (
        <div>
            <DescriptionInput handleChangeInput={handleChangeInput} postData={postData} />

        </div>
    )
    const ItemsSubCategoryArtTextilee = () => (
        <div>
            <ItemsSubCategoryArtTextile handleChangeInput={handleChangeInput} postData={postData} />
        </div>
    ) 

    const ItemsSubCategoryStylee = () => (
        <div>
            <ItemsSubCategoryStyle handleChangeInput={handleChangeInput} postData={postData} />
        </div>
    )

    const ItemsSubCategoryThemee = () => (
        <div>
            <ItemsSubCategoryTheme handleChangeInput={handleChangeInput} postData={postData} />
        </div>
    )
    const PriceInputt = () => (
        <div>
            <PriceInput handleChangeInput={handleChangeInput} postData={postData} />
        </div>
    )
    const DeviseVentee = () => (
        <div>
            <DeviseVente handleChangeInput={handleChangeInput} postData={postData} />
        </div>
    )



    const TalleSelectt = () => (
        <div>
            <TalleSelect handleChangeInput={handleChangeInput} postData={postData} />
        </div>
    )/*
    const ArtistLocationInputt = () => (
        <div>
            <ArtistLocationInput handleChangeInput={handleChangeInput} postData={postData} />
        </div>
    )*/


    const VenteOptionsSelectt = () => (
        <div>
            <VenteOptionsSelect handleChangeInput={handleChangeInput} postData={postData} />

        </div>
    )

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



    const wilayascommunes = () => (
        <WilayaCommune
            postData={postData}
            handleWilayaChange={handleWilayaChange}
            handleCommuneChange={handleCommuneChange}
            wilayasOptions={wilayasOptions}
            communesOptions={communesOptions}
        />
    )

    return (
        <div className='status_modal'>
            <Form onSubmit={handleSubmit}>
                <div className="status_header">
                    <h5 className="m-0">Annonces Categories Art</h5>
                    <span onClick={() => dispatch({
                        type: GLOBALTYPES.STATUS, payload: false
                    })}>
                        &times;
                    </span>
                </div>


                <div className="form-group">
                    {ItemsCategoryy()}
                </div>







                {postData.category === "Peinture" && (
                    <div className='form-group'>
                        {ItemsSubCategoryPeinturee()}
                        <small className='text-danger'>Ce champ est requis</small>
                    </div>
                )}

                {postData.category === "Sculpture" && (
                    <div className='form-group'>
                        {ItemsSubCategorySculpturee()}
                        <small className='text-danger'>Ce champ est requis</small>
                    </div>
                )}



                {postData.category === "Photographie" && (
                    <div className='form-group'>
                        {ItemsSubCategoryPhotographiee()}
                        <small className='text-danger'>Ce champ est requis</small>
                    </div>
                )}




                {postData.category === "Dessin" && (
                    <div className='form-group'>
                        {ItemsSubCategoryDesignn()}
                        <small className='text-danger'>Ce champ est requis</small>
                    </div>
                )}






                {postData.category === "Gravures Estampes" && (
                    <div className='form-group'>

                        {ItemsSubCategoryGravuress()}



                    </div>
                )}

                {postData.category === "Arts Numeriques" && (
                    <div className='form-group'>

                        {ItemsSubCategoryArtsNumeriquess()}
                    </div>


                )}
                {postData.category === "Collages" && (

                    <div className="form-group">
                        {ItemsSubCategoryCollagess()}
                    </div>


                )}
                {postData.category === "Art textile" && (
                    <div className="form-group">

                        {ItemsSubCategoryArtTextilee()}

                    </div>
                )}

                {postData.category === "Art textile" && (
                    <div className="form-group">

                        {ItemsSubCategoryArtTextilee()}

                    </div>
                )}


                <div className="form-group">
                    {ItemsSubCategoryThemee()}
                </div>




                <div>
                    {UniteMesuree()}
                </div>
                <div>
                    {TalleSelectt()}
                </div>

                <div>
                    {MesureInputt()}
                </div>
                <div className="form-group">
                    {PriceInputt()}
                </div>

                <div className="form-group">
                    {DeviseVentee()}
                </div>
                <div>
                    {Envolverlaobraa()}
                </div>
                
                <div>
                    {ItemsSubCategoryStylee()}
                </div>
                <div>
                    {VenteOptionsSelectt()}
                </div>
                <div>
                    {Descriptionnn()}
                </div>
                 
                <div>
                    {wilayascommunes()}
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
