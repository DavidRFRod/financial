import Modal from 'react-modal';
import closeSvg from '../../assets/close.svg';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen:boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps) {
    return (
        <Modal 
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        isOpen={isOpen} 
        onRequestClose={onRequestClose}>
            <Container >
                <button type="button" className="react-modal-close" onClick={onRequestClose}>
                    <img src={closeSvg} alt="Close Button" />
                </button>
                <h2>Cadastrar nova transação</h2>

               <input 
               type="text" 
               placeholder="Title"
               />
               <input 
               type="number" 
               placeholder="Value"
               />

                <TransactionTypeContainer>
                    <button
                        type="button"
                    >
                        <img src={incomeSvg} alt="Enrty" />
                        <span>Entry</span>
                    </button>
                    <button
                        type="button"
                    >
                        <img src={outcomeSvg} alt="Enrty" />
                        <span>Out Come</span>
                    </button>
                </TransactionTypeContainer>

               <input 
               type="text" 
               placeholder="Category"
               />

               <button type="submit">
                   Submit
               </button>
            </Container>
        </Modal>

    )
}