import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global"
import { useState } from 'react'
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

export function App() {

  const[isNewTransactionModalOpen, setIsNewTransactionModaloOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModaloOpen(true);
    }
    function handleCloseNewTransactionModal(){
        setIsNewTransactionModaloOpen(false);
    }
  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen= {isNewTransactionModalOpen} onRequestClose= {handleCloseNewTransactionModal}/>

     
    </>
  );
}

