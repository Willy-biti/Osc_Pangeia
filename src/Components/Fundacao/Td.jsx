import React, { useState } from 'react';
import styled from 'styled-components';

// Container principal da linha do tempo
const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

// Componente que envolve a linha do tempo e os elementos relacionados
const TimelineWrapper = styled.div`
    position: relative;
    width: 80%; /* Ajuste a largura conforme necessário */
    margin-top: 20px;
`;

// Componente para cada ano na linha do tempo
const YearItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin: 0 10px;

    &.active {
        color: blue; /* Cor quando ativo */
    }
`;

// Componente para o check acima da linha do tempo
const CheckItem = styled.div`
    position: absolute;
    top: -25px; /* Posição do check acima da linha */
    left: 50%;
    transform: translateX(-50%);
`;

// Estilo da linha do tempo
const TimelineLine = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #ccc; /* Cor da linha do tempo */
    transform: translateY(-50%);
`;

// Componente para o label de cada ano abaixo da linha do tempo
const YearLabel = styled.div`
    position: absolute;
    bottom: -20px; /* Posição do label abaixo da linha */
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #777;
`;

const TimeLine = () => {
    const [selectedYears, setSelectedYears] = useState([]);

    // Função para lidar com o clique em um ano
    const handleYearClick = (year) => {
        if (selectedYears.includes(year)) {
            setSelectedYears(selectedYears.filter(y => y !== year));
        } else {
            setSelectedYears([...selectedYears, year]);
        }
    };

    return (
        <TimelineContainer>
            {/* Renderizar a linha do tempo com bolinhas */}
            <TimelineWrapper>
                {[...Array(11).keys()].map((year) => {
                    const isActive = selectedYears.includes(2014 + year);

                    return (
                        <YearItem key={year} className={isActive ? 'active' : ''} onClick={() => handleYearClick(2014 + year)}>
                            <YearLabel>{2014 + year}</YearLabel>
                            <CheckItem>
                                {isActive && '✔'}
                            </CheckItem>
                        </YearItem>
                    );
                })}
                <TimelineLine />
            </TimelineWrapper>
            {/* Renderizar conteúdo dos anos selecionados */}
            <div className="timeline-content">
                {selectedYears.map(year => (
                    <div key={year} className="year-content">
                        <h3>Ano {year}</h3>
                        {/* Adicione aqui o conteúdo específico para cada ano */}
                        <p>Conteúdo do ano {year}</p>
                    </div>
                ))}
            </div>
        </TimelineContainer>
    );
};

export default TimeLine;
