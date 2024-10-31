import { usePostDocumentCreate } from "./usePostDocumentCreate";
import { usePostDocumentDelete } from "./usePostDocumentDelete";
import { usePostDocumentUpdate } from "./usePostDocumentsUpdate";



export const useStudentResponsibleLocalStorage = {
    usePostDocumentCreate,
    usePostDocumentUpdate,
    usePostDocumentDelete
}