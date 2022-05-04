import { useEffect, useRef } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransectionsTable(){
    useEffect(() => {
        api.get('transections')
        .then(response => response.data)
    },[]);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 100,00</td>
                        <td>Desenvolvimento</td>
                        <td>04/05/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ 600,00</td>
                        <td>Casa</td>
                        <td>04/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}