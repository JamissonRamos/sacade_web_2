import * as S           from "./styled";
import { useAuth }      from '../../../contexts/authContext/AuthContex'
import RegisterStudent  from "../components/register_stuedent";
import Students         from "../components/students";
import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from "mdb-react-ui-kit";
import { useState } from "react";
import { Theme } from "../../../theme";
import { TextC } from "../../../components/Typography";

const Body = () => {
    const [basicActive, setBasicActive] = useState('tab1');
    const { currentUser } = useAuth(); //Recuperando user logado;
    const { status } = currentUser  //Recuperando status de user logado;

    //nomeando status 
    const statusMap = {
        Administrador: 1,
        Assistente: 2,
        Visitante: 3,
    };

    //atribuindo permicoes as secoes
    const sectionsAuth = {
        Students: [ 1, 2, 3],
        RegisterStudent: [1, 2],
    };

    //Comparando status com permicoes
    const handleHasAccess = (sections, status) => {
        let result
        const statusIndex = statusMap[status];
        result = sectionsAuth[sections]?.includes(statusIndex) || false; // Verifica se o status tem permissão    
        return result
    };

        const handleBasicClick = (value) => {
        //Tabs nav
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };

    return (

        //vedeio para ajuda a fazer as abas do dashboard
        //  https://www.youtube.com/watch?v=L6CeOQ4fqng
        <S.Container>
            <MDBTabs className='custom-tabs'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                        <Theme.Icons.MdPerson />
                        <TextC.Label level={4}>Alunos</TextC.Label>
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                        <Theme.Icons.FaDollarSign />
                        <TextC.Label level={4}>Financeiro</TextC.Label>
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>
                    
            <MDBTabsContent>
                <MDBTabsPane open={basicActive === 'tab1'}> 
                    <S.SectionStudents>
                        {
                            handleHasAccess('Students', status )
                            ? <Students />
                            : null
                        }
                    </S.SectionStudents>

                    <S.SectionRegisterStudents>
                        {
                            handleHasAccess('RegisterStudent', status )
                            ? <RegisterStudent />
                            : null
                        }
                    </S.SectionRegisterStudents>
                    
                </MDBTabsPane>

                <MDBTabsPane open={basicActive === 'tab2'}> 
                    Financeiro
                </MDBTabsPane>
                            
            </MDBTabsContent>
            
        </S.Container>
    ) 
}

export default Body