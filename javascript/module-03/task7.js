const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
   const trans = {
     id: this.transactions.length,
     type,
     amount,
   }
   return trans;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const newTransaction=this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(newTransaction);
    this.balance+=amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {

      if(amount>this.balance){
        console.log("Error! not enough funds!");
      }
    else {
      const withdrawTransaction=this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(withdrawTransaction);
      this.balance-=amount;
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for(let i=0;i<this.transactions.length;i++){
      if(this.transactions[i].id==id){
        return this.transactions[i];
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let result=[];
    for(let i=0;i<this.transactions.length;i++){
      if(this.transactions[i].type==Transaction.DEPOSIT){
        result.push(this.transactions[i]);
   
      }
    }
    return result;
 
  }
};


account.deposit(3000);
account.deposit(1000);
account.withdraw(200);
console.log(account.getBalance());
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));