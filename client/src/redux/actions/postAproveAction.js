import { GLOBALTYPES } from './globalTypes'
import { imageUpload } from '../../utils/imageUpload'
import { postDataAPI, getDataAPI, patchDataAPI } from '../../utils/fetchData'
import { createNotify } from './notifyAction'

export const POST_TYPES_APROVE = {
    CREAR_POST_PENDIENTE: 'CREAR_POST_PENDIENTE',
    LOADING_POST: 'LOADING_POST',
    APROVAR_POST_PENDIENTE: 'APROVAR_POST_PENDIENTE',
    GET_POSTS_PENDIENTES: 'GET_POSTS_PENDIENTES',
    UPDATE_POST: 'UPDATE_POST',
}



export const createPostAprove = ({ postData, images, auth, socket }) => async (dispatch) => {
    
    let media = []
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        if (images.length > 0) media = await imageUpload(images)

        const res = await postDataAPI('posts', { postData, images: media }, auth.token)


        dispatch({
            type: POST_TYPES_APROVE.CREAR_POST_PENDIENTE,
            payload: { ...res.data.newPost, user: auth.user }
        })

        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })

        // Notificación
        const msg = {
            id: res.data.newPost._id,
            text: 'added a new post.',
            recipients: res.data.newPost.user.followers,
            url: `/post/${res.data.newPost._id}`,
            category: postData.category,
            image: media[0]?.url
        }

        dispatch(createNotify({ msg, auth, socket }))

        // 🔥 Redirigir a Home después de publicar el post

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}


export const aprovarPostPendiente = ({ post, estado, auth }) => async (dispatch) => {
    try {
        dispatch({ type: POST_TYPES_APROVE.LOADING_POST, payload: true });

        const res = await patchDataAPI(`aprovarpost/${post._id}/aprovado`, { estado }, auth.token);
        dispatch({
            type: POST_TYPES_APROVE.APROVAR_POST_PENDIENTE,
            payload: res.data,
        });

        dispatch({ type: POST_TYPES_APROVE.LOADING_POST, payload: false });
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
    } catch (error) {
        console.error("Error en aprobarPostPendiente:", error);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: error.message || "Error inesperado" },
        });
    }
};


export const getPostsPendientes = (token) => async (dispatch) => {
    try {
        dispatch({ type: POST_TYPES_APROVE.LOADING_POST, payload: true })
        const res = await getDataAPI('posts/pendientes', token)

        dispatch({
            type: POST_TYPES_APROVE.GET_POSTS_PENDIENTES,
            payload: { ...res.data, page: 2 }
        })

        dispatch({ type: POST_TYPES_APROVE.LOADING_POST, payload: false })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}
 
export const updatePost = ({ postData, images,  auth, status }) => async (dispatch) => {
    let media = []
    const imgNewUrl = images.filter(img => !img.url)
    const imgOldUrl = images.filter(img => img.url)
  
    if (status.category === postData.category
      
        && status.subcategory === postData.subcategory
       
       
        && console.log("status.wilaya:", status.wilaya, "postData.wilaya:", postData.wilaya)
        && console.log("status.commune:", status.commune, "postData.commune:", postData.commune)
         && status.envolverobra === postData.envolverobra
      
        && status.measurementValue === postData.measurementValue
    
        && status.venteOption === postData.venteOption
        && status.description === postData.description
        && status.price === postData.price
     
        && status.artStyle === postData.artStyle
        && status.subCategorytalle === postData.subCategorytalle
        && status.theme === postData.theme
  /*  && status.subCategoryArtsNumeriques === postData.subCategoryArtsNumeriques
        && status.subCategoryArtTextile === postData.subCategoryArtTextile
        && status.subCategoryCollages === postData.subCategoryCollages
        && status.subCategoryDesign === postData.subCategoryDesign
        && status.subCategoryDessin === postData.subCategoryDessin   
         && status.subCategoryPeinture === postData.subCategoryPeinture
        && status.subCategoryPhotographie === postData.subCategoryPhotograph*/
        
        && status.measurementUnit === postData.measurementUnit
 
     
        && imgNewUrl.length === 0
        && imgOldUrl.length === status.images.length
    ) return;

    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        if (imgNewUrl.length > 0) media = await imageUpload(imgNewUrl)

        const res = await patchDataAPI(`post/${status._id}`, {
            ...postData, images: [...imgOldUrl, ...media]
        }, auth.token)

        dispatch({ type: POST_TYPES_APROVE.UPDATE_POST, payload: res.data.newPost })

        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } })
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg }
        })
    }
}