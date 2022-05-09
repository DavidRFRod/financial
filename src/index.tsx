import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import {App} from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );

createServer({

  models: {
    transaction:Model,
    
  },

  seeds(server) {
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelance de website',
          type:'deposit',
          category:'Dev',
          amount: 6000,
          createAt: new Date ('2021-02-12 09:00:00')

        },
        {
          id: 2,
          title: 'Aluguel',
          type:'withdraw',
          category:'Casa',
          amount: 700,
          createAt: new Date ('2022-02-15 10:00:00')

        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transections', () => {
      return this.schema.all('transaction')
    })

    this.post('/transections', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transection', data)
    })
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
