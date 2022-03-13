//react/adminExample.tsx
import React, { useEffect, useState } from 'react'
import Axios from "axios";


type Card = {
    cashback: string,
    id: string,
    name: string
}
let url = "https://gabrieltestando--trainingweekdev21.myvtex.com/api/dataentities/CS/search"
let token = { "VtexIdclientAutCookie": "eyJhbGciOiJFUzI1NiIsImtpZCI6IkNENEQzRDk3ODJCMkZBMzRCRTU0MEVCQUVDMTZBMzFGQzExMTg4Q0QiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJncHYuYmVybmFyZG85NkBnbWFpbC5jb20iLCJhY2NvdW50IjoidHJhaW5pbmd3ZWVrZGV2MjEiLCJhdWRpZW5jZSI6ImFkbWluIiwic2VzcyI6ImM2YThiYzk2LTU5ZjYtNDI3YS1hZmViLTUzZTk4ZDk2NTE3ZCIsImV4cCI6MTY0Njg2NzA5MiwidXNlcklkIjoiMzRhYzIxMTEtNzhjYi00YTA0LTk0YzctNzdmNjUyYzliMGFkIiwiaWF0IjoxNjQ2NzgwNjkyLCJpc3MiOiJ0b2tlbi1lbWl0dGVyIiwianRpIjoiOTJhYWFkOGQtYzY1Yy00ZGRkLWJjYTgtNzEwZjZiMWI4N2FlIn0.ZHl5N9lG0h0ZjOu7s69tY231QkdE6HHVJ9fB8s-5p89RWX7BshqQjLwmu6_WJIVA7PttUFkyL9q0UdWjy-UswA" }


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