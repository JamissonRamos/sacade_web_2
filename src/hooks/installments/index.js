import { useGetDocuments } from "./useGetDocuments";
// import { useGetDocumentsID } from "./useGetDocumentsID";
import { usePostDocumentsCreate } from "./usePostDocumentsCreate";
import { usePostDocumentsUpdate } from "./usePostDocumentsUpdate";
import { usePostDocumentsDelete } from "./usePostDocumentsDelete";

export const useInstallments = {
    useGetDocuments,
    // useGetDocumentsID,
    usePostDocumentsCreate,
    usePostDocumentsUpdate,
    usePostDocumentsDelete,
}