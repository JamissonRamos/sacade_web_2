import { useGetDocumentsByIdStudents } from "./useGetDocumentsByIdStudents";
import { usePostDocumentsCreate } from "./usePostDocumentsCreate";
import { usePostDocumentsUpdate } from "./usePostDocumentsUpdate";
import { usePostDocumentsDelete } from "./usePostDocumentsDelete";

export const useResponsibleStudents = {
    usePostDocumentsCreate,
    useGetDocumentsByIdStudents,
    usePostDocumentsUpdate,
    usePostDocumentsDelete
}