
      const Modal = {
             open(){
                   
              // Abrir modal
              // Adicionar a class active ao modal
              document
              .querySelector('.modal-overlay')
              .classList
              .add('active')

        },
        close() {
                document
              .querySelector('.modal-overlay')
              .classList
              .remove('active')
                // Fechar o modal 
                // remover a class active do modal
        }

     }




     const transactions= [
         {
         id:1,
         description: 'Luz',
         amount: -50000,
         date: '23/01/2021'
    },    
         {
         id:2,
         description: 'Website',
         amount: 500000,
         date: '23/01/2021'
    },   
        {
         id:3,
         description: 'Internet',
         amount: -20000,
         date: '23/01/2021'
    },  {
        id:4,
        description: 'App',
        amount: 20000,
        date: '23/01/2021'
   }
 ] 


     
  const Transaction = {

      incomes() {
        let income = 0
        // pegar todas as transanções
        // para cada transação
      transactions.forEach(transaction => {
        // se ela for maior que zero
        if (transaction.amount > 0) {
           // somar a uma variável e retorna a variável
           income += transaction.amount;
        }


        
        })
        
        
          return income;

      },
      expenses() {
        return 
          
      },
      total() {
        return 
      }
  }

  const DOM = {
      transactionsContainer: document.querySelector('#data-table tbody'),
          

      addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction) 

        DOM.transactionsContainer.appendChild(tr)

    

      },
      innerHTMLTransaction(transaction) {

        const CSSclass = transaction.amount > 0 ? "income":
        "expense"

         const amount = Utils.formatCurrency(transaction.amount)
                 
        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
                <img src="./assets/minus.svg" alt="Remover transação">
        </td>
        `
             return html                         
      },


      updateBalance() {
          document.getElementById('incomeDisplay')
          .innerHTML = Transaction.incomes()
          document.getElementById('expenseDisplay')
          .innerHTML = Transaction.expenses()
          document.getElementById('totalDisplay')
          .innerHTML = Transaction.total()
    }

  }


  const Utils= {
      formatCurrency(value) {
          const signal = Number(value) < 0 ? "-" : ""


          value = String(value).replace(/\D/g,"")

          value = Number(value) /100

         value = value.toLocaleString("pt-BR", {
             style: "currency",
             currency: "BRL"
         })

         return signal + value
    
  }

  
}

  transactions.forEach(function(transaction) {
      DOM.addTransaction(transaction)
  })

  DOM.updateBalance()


  // 1:16:56