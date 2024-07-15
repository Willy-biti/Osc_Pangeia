import React, { useState } from 'react';
import * as C from './Elements';

const CadastroForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        sexo: '',
        endereco: '',
        email: '',
        telefone: '',
        celular: '',
        profissao: '',
        interesses: '',
        comoConheceu: '',
        nacionalidade: '' // Adicionando nacionalidade ao estado inicial do formulário
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar os dados do formulário
        console.log('Dados do formulário:', formData);
    };

    return (
        <C.FormContainer>
            <C.FormTitle>Cadastro de Novo Membro</C.FormTitle>
            <form onSubmit={handleSubmit}>
                <C.FormSection>
                    <C.SectionTitle>Dados Pessoais</C.SectionTitle>
                    <C.FormGroup>
                        <C.Label htmlFor="nome">Nome completo</C.Label>
                        <C.Input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.Label htmlFor="sexo">Sexo</C.Label>
                        <C.Select id="sexo" name="sexo" value={formData.sexo} onChange={handleChange} required>
                            <option value="">Selecione</option>
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </C.Select>
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.Label htmlFor="endereco">Endereço completo</C.Label>
                        <C.Input type="text" id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Rua, número, complemento, bairro, cidade, estado, CEP" required />
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.Label htmlFor="nacionalidade">Nacionalidade</C.Label>
                        <C.Input type="text" id="nacionalidade" name="nacionalidade" value={formData.nacionalidade} onChange={handleChange} />
                    </C.FormGroup>
                </C.FormSection>

                <C.FormSection>
                    <C.SectionTitle>Informações de Contato</C.SectionTitle>
                    <C.FormGroup>
                        <C.Label htmlFor="email">E-mail</C.Label>
                        <C.Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.Label htmlFor="telefone">Número de telefone (opcional)</C.Label>
                        <C.Input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} />
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.Label htmlFor="celular">Telefone celular</C.Label>
                        <C.Input type="tel" id="celular" name="celular" value={formData.celular} onChange={handleChange} required />
                    </C.FormGroup>
                </C.FormSection>

                <C.FormSection>
                    <C.SectionTitle>Informações Adicionais</C.SectionTitle>
                    <C.FormGroup>
                        <C.Label htmlFor="profissao">Profissão/Ocupação</C.Label>
                        <C.Input type="text" id="profissao" name="profissao" value={formData.profissao} onChange={handleChange} />
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.Label htmlFor="interesses">Interesses</C.Label>
                        <C.Input type="text" id="interesses" name="interesses" value={formData.interesses} onChange={handleChange} />
                    </C.FormGroup>
                    <C.FormGroup>
                        <C.Label htmlFor="comoConheceu">Como conheceu a associação</C.Label>
                        <C.Input type="text" id="comoConheceu" name="comoConheceu" value={formData.comoConheceu} onChange={handleChange} />
                    </C.FormGroup>
                </C.FormSection>

                <C.Button type="submit">Cadastrar</C.Button>
            </form>
        </C.FormContainer>
    );
};

export default CadastroForm;
