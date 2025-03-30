
export const FetchDocuments = async (fetch, uid) => {
    const result = await fetch();
    const { success, data, error} = result;

    if(success){
        const filteredData = data.filter(item => item.uid === uid) || [];

        return {
            success: success,
            data: filteredData
        }

    }else{
        return {
            success: false,
            error: error
        }
    }
};