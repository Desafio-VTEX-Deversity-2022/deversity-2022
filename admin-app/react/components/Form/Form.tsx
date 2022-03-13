import React, { useState } from 'react'
import './Form.css'
import Axios from 'axios'


function Form() {
    const [nome, setNome] = useState('');
    const [porcentagemCashback, setporcentagemCashback] = useState('');
    const [regra, setRegra] = useState('')
    const [id, setId] = useState('')

    let url = "https://gabrieltestando--trainingweekdev21.myvtex.com/api/dataentities/CS/documents"
    let token = { "VtexIdclientAutCookie": "eyJhbGciOiJFUzI1NiIsImtpZCI6IkNENEQzRDk3ODJCMkZBMzRCRTU0MEVCQUVDMTZBMzFGQzExMTg4Q0QiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJncHYuYmVybmFyZG85NkBnbWFpbC5jb20iLCJhY2NvdW50IjoidHJhaW5pbmd3ZWVrZGV2MjEiLCJhdWRpZW5jZSI6ImFkbWluIiwic2VzcyI6ImM2YThiYzk2LTU5ZjYtNDI3YS1hZmViLTUzZTk4ZDk2NTE3ZCIsImV4cCI6MTY0Njg2NzA5MiwidXNlcklkIjoiMzRhYzIxMTEtNzhjYi00YTA0LTk0YzctNzdmNjUyYzliMGFkIiwiaWF0IjoxNjQ2NzgwNjkyLCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiOTJhYWFkOGQtYzY1Yy00ZGRkLWJjYTgtNzEwZjZiMWI4N2FlIn0.ZHl5N9lG0h0ZjOu7s69tY231QkdE6HHVJ9fB8s-5p89RWX7BshqQjLwmu6_WJIVA7PttUFkyL9q0UdWjy-UswA" }

    const obj = {

        name: nome,
        cashback: porcentagemCashback,
        ruleId: regra,
        ruleValue: id,
        developerEmail: "gpv.bernardo96@gmail.com",
        accountName: "trainingweekdev21",
        accountId: "08efff7a-3059-44d3-ab4e-100c95af362a",
        dataEntityId: "CS"

    }

    function createCashback() {
        Axios.post(url, obj, { headers: token })

            .then((response) => {
                console.log(response.data)

            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
                console.log(url)
            })
    }



    return (
        <div className="form">
            <h1>Cadastrar Campanha</h1>
            <input placeholder="Nome da Campanha" value={nome} onChange={e => setNome(e.target.value)}></input>
            <input type="number" placeholder="Porcentagem de Cashback" value={porcentagemCashback} onChange={e => setporcentagemCashback(e.target.value)}></input>
            <select value={regra} onChange={e => setRegra(e.target.value)}>
                <option>--Escolha uma opção--</option>
                <option value='productId'>Id do Produto</option>
                <option value='categoryId'>Id da Categoria</option>
            </select>
            <input type="number" placeholder="ID do Produto ou Categoria" value={id} onChange={e => setId(e.target.value)}></input>
            <button className="buttonForm" type="button" onClick={() => createCashback()}>Criar Campanha</button>
        </div>
    )
}

export default Form;