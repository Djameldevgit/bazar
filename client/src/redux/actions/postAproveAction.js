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
    console.log(postData)
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
            title: postData.title,
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
    const attributesChanged = Object.keys(postData.attributes).some(key => 
        JSON.stringify(postData.attributes[key]) !== JSON.stringify(status.attributes?.[key])
    );
    if (status.title === postData.title
      
        && status.subCategory === postData.subCategory
           && !attributesChanged 
        && JSON.stringify(status.attributes) === JSON.stringify(postData.attributes) // ⬅️ Comparar attributes
       
        && status.description === postData.description
        && status.price === postData.price
        && status.unidaddeprecio === postData.unidaddeprecio
        && status.oferta === postData.oferta
        && status.change === postData.change
        && console.log("status.wilaya:", status.wilaya, "postData.wilaya:", postData.wilaya)
        && console.log("status.commune:", status.commune, "postData.commune:", postData.commune)
        && console.log("status.marca:", status.marca, "postData.marca:", postData.marca)
        && console.log("status.modelo:", status.modelo, "postData.modelo:", postData.modelo)
        && console.log("status.marcas:", status.marcas, "postData.marca:", postData.marcas)
        && console.log("status.modelos:", status.modelos, "postData.modelo:", postData.modelos)

        
        && status.email === postData.email
        && status.telefono === postData.telefono
     
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