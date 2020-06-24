import TransactionsRepository from '../repositories/TransactionsRepository';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class ListTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute() {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();
    return {
      transactions,
      balance,
    };
  }
}

export default ListTransactionsService;
