import Table from 'react-bootstrap/Table';

const TableCustom = (props) => {
    const { data } = props
    console.log('data', data);
    

    return (
        <Table striped bordered hover responsive className='custom-table' >
            <thead>
                <tr>
                    <th className='text-center'>#</th>
                    <th>Nome</th>
                    <th className='text-center'>Idade</th>
                    <th className='text-center'>Gênero</th>
                    <th className='text-center'>Status</th>
                    <th className='text-center'>Altura</th>
                    <th className='text-center'>Peso</th>
                    <th className='text-center'>Grau</th>
                    <th className='text-center'>Faixa</th>
                </tr>
            </thead>
            <tbody>
                { 
                    data && data.map((item, i) => {
                        const {uidStudent, firstName, lastName, age, sex, status, studentHeight, studentWeight, degrees, range} = item;
                        
                        return (
                            <tr key={uidStudent}>
                                <td className='text-center'>{i + 1}</td>
                                <td>{firstName} {lastName}</td>
                                <td className='text-center'>{age}</td>
                                <td className='text-center'>{sex}</td>
                                <td className='text-center'>{status}</td>
                                <td className='text-center'>{studentHeight} - m</td>
                                <td className='text-center'>{studentWeight} - Kg</td>
                                <td className='text-center'>{degrees}</td>   
                                <td className='text-center'>{range}</td>      
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table> 
    )
}

export default TableCustom


/* <tr>
                    <td>1</td>
                    <td className='custom-name'>João Silva</td>
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
*/