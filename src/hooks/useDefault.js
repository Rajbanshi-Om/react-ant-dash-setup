// import { useQuery ,useQueryClient , useMutation} from "react-query";

import { useQuery,useQueryClient,useMutation } from "@tanstack/react-query";
import { RequestApi } from "../lib/AxiosIntercepter/axios-util";
// import toast from "../Utils/toast";


const fetchData = ({ queryKey }) => {
    const queryName = queryKey[0]
    // return httpClient.GET(queryName ,true)
    return RequestApi({url:queryName})
}

export const useFetchData = (queryName ) => {
    return useQuery(queryName , fetchData )
}

const fetchDataById = ({ queryKey }) => {
    const queryName = queryKey[0]
    const queryId = queryKey[1]
    // return httpClient.GET(queryName + '/' + queryId ,true)
    return RequestApi({url: queryName + '/' + queryId})
}

export const useFetchDataById = (queryName , queryId ) => {
    return useQuery([queryName ,queryId] , fetchDataById)
}

const postData = (pData) => {
    console.log("pdata" , pData)
    console.log("here i am " , pData?.data[0] ,pData?.data[1])
    // return httpClient.POST(pData?.data[0] , pData?.data[1] , true)
} 


export const usePostData = (queryName) => {
    const queryClient = useQueryClient ()
    return useMutation(postData, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(queryName)
            // toast.success("Upload Successfull")
        },
        onError: (err) => {
            // toast.error(err?.response?.data?.error?.errors[0]?.message);
          },
    })
}


const updateData = (pData) => {
    // return httpClient.PUT(pData?.data[0] , pData?.data[1] , true)
} 


export const useUpdateData = (queryName) => {
    const queryClient = useQueryClient ()
    return useMutation(updateData, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(queryName)
            // toast.success("Update Successfull")
        },
        onError: (err) => {
            // toast.error(err?.response?.data?.error?.errors[0]?.message);
          },
    })
}



const deleteData = (pData) => {
    // return httpClient.DELETE(pData?.data[0]+ '/'+ pData?.data[1] ,true)
}

export const useDeleteData = (queryName) => {
    const queryClient = useQueryClient ()
    return useMutation(deleteData, {
        onSuccess: (data) => {
            queryClient.invalidateQueries(queryName)
            // toast.success("Delete Successfull")
        },
        onError: (err) => {
            // toast.error(err?.response?.data?.error?.errors[0]?.message);
          },
    })
}






