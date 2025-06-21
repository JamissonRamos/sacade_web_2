import * as S from './styled'
import Header from './header'
import { TextC } from '../../../../components/Typography'
import { Theme } from '../../../../theme'

import Table from 'react-bootstrap/Table';
const ReportCurrentStudentTracks = () => {
    return (
        <S.Container>
            <Header />

            <Table striped bordered hover className='custom-table' size='sm'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>Grau</th>
                        <th>Faixa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>João Silva</td>
                        <td>12</td>
                        <td>1.50m</td>
                        <td>45kg</td>
                        <td>2</td>
                        <td>Azul</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Maria Oliveira</td>
                        <td>8</td>
                        <td>1.30m</td>
                        <td>30kg</td>
                        <td>1</td>
                        <td>Branca</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Carlos Souza</td>
                        <td>15</td>
                        <td>1.65m</td>
                        <td>60kg</td>
                        <td>3</td>
                        <td>Roxa</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Ana Costa</td>
                        <td>25</td>
                        <td>1.70m</td>
                        <td>65kg</td>
                        <td>4</td>
                        <td>Marrom</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Pedro Santos</td>
                        <td>32</td>
                        <td>1.80m</td>
                        <td>80kg</td>
                        <td>4</td>
                        <td>Preta</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Luiza Pereira</td>
                        <td>7</td>
                        <td>1.25m</td>
                        <td>28kg</td>
                        <td>1</td>
                        <td>Branca</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Rafael Alves</td>
                        <td>18</td>
                        <td>1.75m</td>
                        <td>70kg</td>
                        <td>3</td>
                        <td>Roxa</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Fernanda Lima</td>
                        <td>40</td>
                        <td>1.68m</td>
                        <td>62kg</td>
                        <td>4</td>
                        <td>Preta</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Lucas Martins</td>
                        <td>10</td>
                        <td>1.40m</td>
                        <td>38kg</td>
                        <td>2</td>
                        <td>Cinza</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Juliana Rocha</td>
                        <td>28</td>
                        <td>1.65m</td>
                        <td>58kg</td>
                        <td>4</td>
                        <td>Marrom</td>
                    </tr>
                </tbody>
            </Table>





            <S.WrapButton> 
                <S.Button
                    type="button"
                    // onClick={() => {handleGeneratePdf()}}
                    // disabled={loadingCreateDocPdf}
                >
                    <TextC.Label>Baixar Dados</TextC.Label>
                    <Theme.Icons.MdSaveAlt />
                </S.Button>
            </S.WrapButton>
            
        </S.Container>
    )
}

export default ReportCurrentStudentTracks