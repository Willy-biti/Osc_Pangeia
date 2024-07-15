import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 60%;
    margin: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 80px;
    display: flex;
    justity-content: center;
    flex-direction: column;
`;

export const FormTitle = styled.h2`
    color: #4CAF50;
    text-align: center;
`;

export const FormSection = styled.div`
    margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
    color: #333;
    margin-bottom: 10px;
`;

export const FormGroup = styled.div`
    margin-bottom: 15px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Select = styled.select`
    width: 83%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;
