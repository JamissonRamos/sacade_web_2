import { useGetDocumentsByIdStudents } from "./useGetDocumentsByIdStudents";
import { usePostDocumentsCreate } from "./usePostDocumentsCreate";
import { usePostDocumentsUpdate } from "./usePostDocumentsUpdate";

export const useResponsibleStudents = {
    usePostDocumentsCreate,
    useGetDocumentsByIdStudents,
    usePostDocumentsUpdate
}