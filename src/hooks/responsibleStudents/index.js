import { useGetDocuments } from "./useGetDocuments";
import { useGetDocumentsID } from "./useGetDocumentsID";
import { useGetDocumentsByIdStudents } from "./useGetDocumentsByIdStudents";
import { usePostDocumentsCreate } from "./usePostDocumentsCreate";
import { usePostDocumentsUpdate } from "./usePostDocumentsUpdate";
import { usePostDocumentsDelete } from "./usePostDocumentsDelete";

export const useResponsibleStudents = {
    useGetDocuments,
    useGetDocumentsID,
    useGetDocumentsByIdStudents,
    usePostDocumentsCreate,
    usePostDocumentsUpdate,
    usePostDocumentsDelete,
}