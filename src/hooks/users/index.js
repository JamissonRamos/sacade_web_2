import { useGetDocuments } from "./useGetDocuments";
import { useCreate } from "./useCreate";
import { useDelete } from "./useDelete";
import { usePostDocumentsID } from "./usePostDocumentsID";


export const useUsers = {
    useGetDocuments,
    usePostDocumentsID,
    useDelete,
    useCreate
}