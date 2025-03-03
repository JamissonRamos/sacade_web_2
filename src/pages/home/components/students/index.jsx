import { useEffect, useState } from 'react'
import CardStudentActive from './cards/card_students_active'
import CardStudentsBlocked from './cards/card_students_blocked'
import CardStudentsInactive from './cards/card_students_inactive';
import { useStudents } from '../../../../hooks/students';
import * as S from './styled';
import CardStudentsSexMan from './cards/card_students_sex_man';
import CardStudentsSexWoman from './cards/card_students_sex_woman';
import CardStudentsTotal from './cards/card_students_total';

const Students = () => {
    const [totalItemActive, setTotalItemActive] = useState(0);
    const [totalItemBlocked, setTotalItemBlocked] = useState(0);
    const [totalItemInactive, setTotalItemInactive] = useState(0);
    const [totalItemSexMan, setTotalItemSexMan] = useState(0);
    const [totalItemSexWoman, setTotalItemSexWoman] = useState(0);
    const [totalStudents, setTotalStudents] = useState(0);
    
    const {getDocuments, loading} = useStudents.useGetDocuments();
    
    const fetchDocuments = async () => {
        const result = await getDocuments();
        const { success, data, message } = result;
                
        if(success){
            setTotalStudents(data.length)
            // Objeto para mapear os estados
            const counts = {
                ativo: 0,
                bloqueado: 0,
                inativo: 0,
                homem: 0,
                mulher: 0,
            };

            data.forEach(student => {
                if (student.status === 'ativo') counts.ativo++;
                if (student.status === 'bloqueado') counts.bloqueado++;
                if (student.status === 'inativo') counts.inativo++;
                if (student.sex === 'homem') counts.homem++;
                if (student.sex === 'mulher') counts.mulher++;
            })

            // Atualiza os estados
            setTotalItemActive(counts.ativo);
            setTotalItemBlocked(counts.bloqueado);
            setTotalItemInactive(counts.inativo);
            setTotalItemSexMan(counts.homem);
            setTotalItemSexWoman(counts.mulher);


        }else{
            console.log('error: ', message);
            setTotalItemActive(0);
            setTotalItemBlocked(0);
            setTotalItemInactive(0);
            setTotalItemSexMan(0);
            setTotalItemSexWoman(0);
        }
    };
        
        useEffect(() => {
          fetchDocuments();  // Chama a função ao renderizar o componente
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    return (
        <S.Container>
            <S.WrapStudents>
                <CardStudentActive totalItem={totalItemActive} loading={loading} />
                <CardStudentsBlocked totalItem={totalItemBlocked} loading={loading}/>
                <CardStudentsInactive totalItem={totalItemInactive} loading={loading}/>
            </S.WrapStudents>
            
            {/* Mudar esse nome, range vem de faixa, aqui são dados pessoais do aluno */}
            <S.WrapRanges>
                <CardStudentsSexMan totalItem={totalItemSexMan} loading={loading}/>
                <CardStudentsSexWoman totalItem={totalItemSexWoman} loading={loading}/>
                <CardStudentsTotal totalItem={totalStudents} loading={loading}/>
            </S.WrapRanges>
        </S.Container>
    )
}

export default Students