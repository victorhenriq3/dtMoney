
import { useContext } from "react";
import { TransactionsContext } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable(){

    const {transactions} = useContext(TransactionsContext)

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction =>(
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{new Intl.NumberFormat('pr-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(transaction.amount)}</td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat('pr-BR').format(new Date(transaction.createdAt))}</td>
                            </tr>     
                        )
                    )}              
                </tbody>
            </table>
        </Container>
    )
}