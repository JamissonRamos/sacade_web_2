import { useGetDocuments } from "./useGetDocuments";
import { useCreate } from "./useCreate";
import { useDelete } from "./useDelete";
import { useID } from "./useID";
import { useUpdate } from "./useUpdate";


export const useUsers = {
    useGetDocuments,
    useID,
    useUpdate,
    useDelete,
    useCreate
}