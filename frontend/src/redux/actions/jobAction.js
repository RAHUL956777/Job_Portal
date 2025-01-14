import { server } from "../store";
import axios from 'axios'

export const jobLoadAction = (pageNumber,keyword='',cat='',location='')=> async(dispatch)=>{
    dispatch({type:"loadJobRequest"})

    try {
        const {data} = await axios.get(`${server}/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
        dispatch({
            type:"loadJobSuccess",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"loadJobFail",
            payload:error.response.data.message
        })
    }
}