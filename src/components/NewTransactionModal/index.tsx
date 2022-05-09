import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeSvg from '../../assets/close.svg';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen:boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] =  useState('deposit');

   function handleCreateNewTransaction(event: FormEvent) {
       event.preventDefault ();

       const data = {
           title, 
           amount,
           category,
           type,

       }
       api.post('/transections', data)
    }
     
    return (
        <Modal 
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        isOpen={isOpen} 
        onRequestClose={onRequestClose}>
            <Container onSubmit={handleCreateNewTransaction}>
                <button type="button" className="react-modal-close" onClick={onRequestClose}>
                    <img src={closeSvg} alt="Close Button" />
                </button>
                <h2>Cadastrar nova transação</h2>

               <input 
               type="text" 
               placeholder="Title"
               value={title}
               onChange={event => setTitle(event.target.value)}
               />
               <input 
               type="number" 
               placeholder="Value"
               value={amount}
               onChange={event => setAmount(Number(event.target.value))}
               
               />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick = {() => {setType('deposit')}}
                        isActive = {type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeSvg} alt="Enrty" />
                        <span>Entry</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick = {() => {setType('withdraw')}}
                        isActive = {type === 'withdraw'}
                        activeColor="red"

                    >
                        <img src={outcomeSvg} alt="Entry" />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>

               <input 
               type="text" 
               placeholder="Category"
               value={category}
               onChange={event => setCategory(event.target.value)}
               />

               <button type="submit">
                   Submit
               </button>
            </Container>
        </Modal>

    )
}