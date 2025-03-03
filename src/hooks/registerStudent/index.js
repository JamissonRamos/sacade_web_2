import { useGetDocuments } from "./useGetDocuments";
import { useGetDocumentsID } from "./useGetDocumentsID";
import { useGetDocumentsByIdRegisterStudent } from "./useGetDocumentsByIdRegisterStudents";
import { usePostDocumentsCreate } from "./usePostDocumentsCreate";
import { usePostDocumentsUpdate } from "./usePostDocumentsUpdate";
import { usePostDocumentsDelete } from "./usePostDocumentsDelete";

export const useRegisterStudents = {
    useGetDocuments,
    useGetDocumentsID,
    useGetDocumentsByIdRegisterStudent,
    usePostDocumentsCreate,
    usePostDocumentsUpdate,
    usePostDocumentsDelete,
}