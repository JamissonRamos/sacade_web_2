import { Button, Form } from 'react-bootstrap'
import * as S from './styled'
import { FieldStudents } from '../fields'
import { Theme } from '../../../../../theme'
import { TabHorizontal } from '../tabs/tab_horizontal'
import TabVertical from '../tabs/tab_vertical'

const BodyForm = () => {
    return (
        <S.Container>
            <Form>
                {/* <Tabs
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
                </Tabs> */}

                {/* <TabHorizontal FieldStudents={FieldStudents} /> */}
                <TabVertical />



                <S.WrapButtons>
                    <Button
                        variant="success"
                        size='sm'
                        type='submit'
                        // disabled={isLoadingPostUpdate ? true : false}
                    >
                        {/* { isLoadingPostUpdate ?
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span className="sr-only"> Atualizando... </span>
                            </> : */}
                            <>
                                <Theme.Icons.MdSaveAlt />
                                <span>Salvar</span>
                            </>
                        {/* } */}
                    </Button> 
                    <Button
                        variant="outline-danger"
                        size='sm'
                        // onClick={() => navigate('/users')}
                    >
                        <Theme.Icons.MdClose />
                        <span>Cancelar</span>
                    </Button>                        
                </S.WrapButtons>
            </Form>
        </S.Container>
    )
}

export default BodyForm