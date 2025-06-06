import * as S           from "./styled";
import { useAuth }      from '../../../contexts/authContext/AuthContex'
import RegisterStudent  from "../components/register_stuedent";
import Students         from "../components/students";
import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from "mdb-react-ui-kit";
import { useState } from "react";
import { Theme } from "../../../theme";
import { TextC } from "../../../components/Typography";
import { HasAccess } from "../script";

const Body = () => {
    const [basicActive, setBasicActive] = useState('tab1');
    const { currentUser } = useAuth(); //Recuperando user logado;
    const { status } = currentUser  //Recuperando status de user logado;

    //Comparando status com permicoes
    const handleHasAccess = (sections, status) => {
        if (sections == "") return;
        if (status == "") return;

        return HasAccess(sections, status)
    };

    const handleBasicClick = (value) => {
        //Tabs nav
        if (value === basicActive) {
            return;
        }
        setBasicActive(value);
    };



    return (

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
                        { handleHasAccess('Students', status ) && <Students /> }
                    </S.SectionStudents>

                    <S.SectionRegisterStudents>
                        { handleHasAccess('RegisterStudent', status ) && <RegisterStudent /> }
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