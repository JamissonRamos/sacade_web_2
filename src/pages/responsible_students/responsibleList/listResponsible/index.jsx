import * as S from './styled';
import { TextC } from '../../../../components/Typography'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';

const ListResponsible = ({data}) => {  
  const [registered] = useState(data || []);
  const navigate = useNavigate();
  const dataStudentLocalStorage = JSON.parse(localStorage.getItem('student')) || [];
  const { uid } = dataStudentLocalStorage[0] || ""; 

  const handlesBadge = (badge) => {
    switch (badge) {
      case 'Nenhum':
        return 'danger';
      default:
        return 'primary'
    }
  };

  const handleNavForm = (uid) => {
    navigate('/responsibleStudents/form_update', { state: { uid: uid } });
  };

  return (
    <S.Container>
      {
          registered && registered.map(({id, fullName, idStudentLevel}, i) => {

            let relationshipLevel = 'N/A';
            if(idStudentLevel){
              if (!Array.isArray(idStudentLevel)) return;
              const level = idStudentLevel.find(item => item.idStudent === uid);
              relationshipLevel = level ? level.relationshipLevel : 'N/A';
            }else {
              relationshipLevel = registered.relationshipLevel
            }
            
            return (
            
              <S.WrapButton 
                key={id}
                onClick={() => handleNavForm(id)}  
              >
                <S.Card>
                  <S.SectionPrime>
                    <S.WrapIndex>
                      <TextC.Body level={3}> {i + 1} </TextC.Body>
                    </S.WrapIndex>
                    <S.CircleFirstLetterNome>
                      {fullName && fullName.charAt(0)}
                    </S.CircleFirstLetterNome>
                    <S.Name>
                        { fullName } 
                    </S.Name>

                  </S.SectionPrime>
                  <S.SectionSecondary>
                    <S.Status>
                      <Badge bg={handlesBadge(relationshipLevel)} text="light">
                        {relationshipLevel}
                      </Badge>
                    </S.Status>
                  </S.SectionSecondary>
                </S.Card>
              </S.WrapButton>

            )
        })
      }

    </S.Container>

  );

}

export default ListResponsible