import { useEffect, useState } from 'react'
import CardStudentActive from './card_students_active'
import CardStudentsBlocked from './card_students_blocked'
import { useStudents } from '../../../../../hooks/students';
import CardStudentsInactive from './card_students_inactive';


const Students = () => {
    const [totalItemActive, setTotalItemActive] = useState(0);
    const [totalItemBlocked, setTotalItemBlocked] = useState(0);
    const [totalItemInactive, setTotalItemInactive] = useState(0);
    
    const {getDocuments, loading} = useStudents.useGetDocuments();
    
    const fetchDocuments = async () => {
        const result = await getDocuments();
        const { success, data, message } = result;
                
        if(success){
            const studentsActive = data.filter(students => students.status === 'ativo');
            const totalAtivos = studentsActive.length;
            setTotalItemActive(totalAtivos);

            const studentsBlocked = data.filter(students => students.status === 'bloqueado');
            const totalBlocked = studentsBlocked.length;
            setTotalItemBlocked(totalBlocked);
            
            const studentsInactive = data.filter(students => students.status === 'bloqueado');
            const TotalItemInactive = studentsInactive.length;
            setTotalItemInactive(TotalItemInactive);

        }else{
            console.log('error: ', message);
            setTotalItemActive(0);
            setTotalItemBlocked(0);
            setTotalItemInactive(0);
        }
    };
        
        useEffect(() => {
          fetchDocuments();  // Chama a função ao renderizar o componente
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    return (
        <>
            <CardStudentActive totalItem={totalItemActive} loading={loading} />
            <CardStudentsBlocked totalItem={totalItemBlocked} loading={loading}/>
            <CardStudentsInactive totalItem={totalItemInactive} loading={loading}/>
        </>
    )
}

export default Students