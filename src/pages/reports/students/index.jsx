import * as S from './styled';
import { useEffect, useState } from 'react';


import Header from './header';
import Fields from './fields';
import Body from './Body';

const ReportStudents = () => {

    // Dados iniciais da tabela
    const initialData = [
        { id: 1, firstName: 'mark', lastName: 'Otto', birthDate: '1990-01-15', status: 'ativo', sex: 'masculino' },
        { id: 2, firstName: 'Jacob', lastName: 'Thornton', birthDate: '1985-02-20', status: 'inativo', sex: 'masculino' },
        { id: 3, firstName: 'Larry', lastName: 'Bird', birthDate: '1978-03-25', status: 'bloqueado', sex: 'masculino' },
        { id: 4, firstName: 'Jane', lastName: 'Doe', birthDate: '1992-04-30', status: 'ativo', sex: 'feminino' },
        { id: 5, firstName: 'John', lastName: 'Smith', birthDate: '1988-05-10', status: 'inativo', sex: 'masculino' },
        { id: 6, firstName: 'Emily', lastName: 'Johnson', birthDate: '1995-06-14', status: 'ativo', sex: 'feminino' },
        { id: 7, firstName: 'Michael', lastName: 'Brown', birthDate: '1980-07-22', status: 'bloqueado', sex: 'masculino' },
        { id: 8, firstName: 'Sarah', lastName: 'Davis', birthDate: '1993-08-18', status: 'ativo', sex: 'feminino' },
        { id: 9, firstName: 'David', lastName: 'Wilson', birthDate: '1982-09-05', status: 'inativo', sex: 'masculino' },
        { id: 10, firstName: 'Sophia', lastName: 'Miller', birthDate: '1991-10-11', status: 'ativo', sex: 'feminino' },
        { id: 11, firstName: 'James', lastName: 'Garcia', birthDate: '1987-11-15', status: 'bloqueado', sex: 'masculino' },
        { id: 12, firstName: 'Olivia', lastName: 'Martinez', birthDate: '1994-12-20', status: 'ativo', sex: 'feminino' },
        { id: 13, firstName: 'William', lastName: 'Hernandez', birthDate: '1983-01-30', status: 'inativo', sex: 'masculino' },
        { id: 14, firstName: 'Ava', lastName: 'Lopez', birthDate: '1996-02-25', status: 'ativo', sex: 'feminino' },
        { id: 15, firstName: 'Daniel', lastName: 'Gonzalez', birthDate: '1989-03-12', status: 'bloqueado', sex: 'masculino' },
        { id: 16, firstName: 'Mia', lastName: 'Wilson', birthDate: '1990-04-27', status: 'ativo', sex: 'feminino' },
        { id: 17, firstName: 'Matthew', lastName: 'Anderson', birthDate: '1986-05-19', status: 'inativo', sex: 'masculino' },
        { id: 18, firstName: 'Isabella', lastName: 'Thomas', birthDate: '1992-06-09', status: 'ativo', sex: 'feminino' },
        { id: 19, firstName: 'Ethan', lastName: 'Taylor', birthDate: '1984-07-14', status: 'bloqueado', sex: 'masculino' },
        { id: 20, firstName: 'Charlotte', lastName: 'Moore', birthDate: '1991-08-21', status: 'ativo', sex: 'feminino' },
    ];

    // Estado para armazenar os dados filtrados
    const [filteredData, setFilteredData] = useState(initialData);

    // Criando um objeto para rastrear os status já adicionados
    const statusTracker = {};
    const uniqueStatuses = [];
    
    const sexesTracker = {};
    const uniqueSexes = [];
    
    // Extraindo os tipos de status únicos do array
    initialData.forEach(({status}) => {

        if (!statusTracker[status]) {
            statusTracker[status] = true; // Marca o status como encontrado
            uniqueStatuses.push(status); // Adiciona o usuário ao array
        }
    });

    // Extraindo os tipos de status únicos do array
    initialData.forEach(({sex}) => {

        if (!sexesTracker[sex]) {
            sexesTracker[sex] = true; // Marca o sexo como encontrado
            uniqueSexes.push(sex); // Adiciona o sexo ao array
        }
    });

    // Estado para os valores dos filtros
    const [filters, setFilters] = useState({
        firstName: '',
        status: '',
        sex: ''
    });

    // Função para lidar com mudanças nos filtros
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        
        setFilters(prev => ({
        ...prev,
        [name]: value
        }));
    };
    
    // Efeito para filtrar os dados sempre que os filtros mudarem
    useEffect(() => {
        if (filters.firstName === '' && filters.status === '' && filters.sex === '')  setFilteredData(initialData);

        const filtered = initialData.filter(item => {
            return (
                item.firstName.toLowerCase().includes(filters.firstName.toLowerCase()) &&
                (filters.status === '' || item.status === filters.status) &&
                (filters.sex === '' || item.sex === filters.sex)
            );
        });
        console.log('filtered', filtered);

        setFilteredData(filtered);
    }, [filters]);


    const totalStudents = filteredData.length;
    
    return (

        <S.Container>
            <Header />

            {/* <div> */}
                <Fields 
                    filters={filters} 
                    handleFilterChange={handleFilterChange} 
                    uniqueStatuses={uniqueStatuses} 
                    uniqueSexes={uniqueSexes}
                />
                
                <Body 
                    filteredData={filteredData}
                    totalStudents={totalStudents}
                />

                {filteredData.length === 0 && (
                    <div className="text-center text-muted py-3">
                        No records found matching your filters.
                    </div>
                )}
            {/* </div> */}

            <div>roda pe</div>
        </S.Container>
    )
}

export default ReportStudents;