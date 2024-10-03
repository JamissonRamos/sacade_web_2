import { useGetDocuments } from "./useGetDocuments";
import { useGetDocumentsID } from "./useGetDocumentsID";
import { useCreate } from "./useCreate";
import { usePostDocumentDelete } from "./usePostDocumentDelete";
import { usePostDocumentsID } from "./usePostDocumentsID";


export const useUsers = {
    useGetDocuments,
    useGetDocumentsID,
    usePostDocumentsID,
    usePostDocumentDelete,
    useCreate
}