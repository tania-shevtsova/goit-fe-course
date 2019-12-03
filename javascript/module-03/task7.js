const Transaction = {
  type: "DEPOSIT",
  id: "deposit",
  amount: 20000,

  type: "WITHDRAW",
  id: "withdraw",
  amount: 1000
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
    for (let trans in Transaction) {
      if (trans.type == type) {
        return;
      } else {
        this.transactions.push(type);
      }
    }
    return type;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if(createTransaction(amount, type)){
      this.transactions.push(type);
    }
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
    let temp=0;

      if(amount>this.balance){
        console.log("Error! not enough funds!");
      }
    else{
      createTransaction(amount, type);
      transactions.push(type);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return 
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for(let i=0;i<Transaction.length;i++){
      if(Transaction.id[i]==id){
        console.log(Transaction.id);
        return Transaction.id[i];
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {}
};
