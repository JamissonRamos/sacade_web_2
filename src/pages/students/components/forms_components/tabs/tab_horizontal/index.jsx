import * as S from './styled'
import { Tab, Tabs } from "react-bootstrap"

export const TabHorizontal = ({FieldStudents}) => {
    return (
        <S.Container>
            <Tabs
                defaultActiveKey="dataStudents"
                id="tab-fields"
                className="mb-2"
                fill
            >
                <Tab eventKey="dataStudents" title="Dados do Aluno">
                    <FieldStudents.DataStudents />
                </Tab>
                <Tab eventKey="dataResponsible" title="Dados do Responsáveis">
                    <FieldStudents.DataResponsible />
                </Tab>
                <Tab eventKey="dataAddress" title="Dados do Endereço" >
                    <FieldStudents.DataAddress />
                </Tab>
                <Tab eventKey="studentMedicalDescription" title="Descrição Médica do Aluno" >
                    <FieldStudents.StudentMedicalDescription />
                </Tab>
            </Tabs>
        </S.Container>
    )
}
