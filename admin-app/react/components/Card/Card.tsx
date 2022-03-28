//react/adminExample.tsx
import React, { useEffect, useState } from 'react'
import Axios from "axios";


type Card = {
    cashback: string,
    id: string,
    name: string
}
let url = "https://gabrieltestando--trainingweekdev21.myvtex.com/api/dataentities/CS/search"
let token = { "VtexIdclientAutCookie": "eyJhbGciOiJFUzI1NiIsImtpZCI6IkUyNjYxODAxREI5MDVERDFGODZBNDcyMzA3ODYxOEI1NTExRkJEMDEiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJydGFtaXJlczExN0BnbWFpbC5jb20iLCJhY2NvdW50IjoidHJhaW5pbmd3ZWVrZGV2MjEiLCJhdWRpZW5jZSI6ImFkbWluIiwic2VzcyI6IjFmYzI3Y2Q0LTgxZTMtNGE4MS1iMmRkLTg3NjU1YjZiNzUyZCIsImV4cCI6MTY0ODEwMjEzMCwidXNlcklkIjoiMzBhNTI2Y2QtZGE0OC00MjUyLWEzNGUtZmU4ZjJhZDhlN2RlIiwiaWF0IjoxNjQ4MDE1NzMwLCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiNTU0ZGYxNWEtOWFjOS00N2I5LWFmZTktZjA2YzMwODJjYzAxIn0.EOs46edtmEGdBAmWdp56jGX1iQKmJfE_ktBnKDmLz-iB546UKSr4_unyy4xIATAUkfly3YK49cMGL6z4Ago7oQ"}

const Card = () => {

    const [listCard, setListCard] = useState<any[]>([]);

    useEffect(() => {
        Axios.get(url, { headers: token }).then((response) => {
            setListCard(response.data);
            console.log(response.data)
        });
    }, []);

    return (
        <div>
            {listCard.map((val) =>
                <dt>
                    <h3>{val.name}</h3>
                    <div>Porcentagem de Cashback: {val.cashback}%</div>
                    <button>Excluir</button>

                </dt>)}
        </div>

    )
}

export default Card