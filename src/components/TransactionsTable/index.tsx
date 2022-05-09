import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


interface Transaction {
    id: number;
    title: string;
    category: string;
    amount: number;
    type: string;
    createAt: string;
}

export function TransectionsTable(){

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transections')
        .then(response => setTransactions(response.data.transactions))
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
                    {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                            { new Intl.NumberFormat('pt-BR', 
                            {style:'currency',
                            currency: 'BRL'
                            }).format(transaction.amount)}
                        </td>
                        <td>{transaction.category}</td>
                        <td> { new Intl.DateTimeFormat('pt-BR').format(
                            new Date(transaction.createAt)
                            )}</td>
                    </tr>
                    ))}
                   
                </tbody>
            </table>
        </Container>
    );
}