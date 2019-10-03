import { finance } from 'faker';
import { CurrencyCode } from 'src/enums/currency-code';
import { TransactionType } from 'src/enums/transaction-type';

export interface IFinanseDTO {
  account: string;
  accountName: string;
  mask: string;
  amount: string;
  transactionType: string;
  currencyCode: string;
  currencyName: string;
  currencySymbol: string;
  bitcoinAddress: string;
  iban: string;
  bic: string;
}

export class Finance {
  public account: number;
  public accountName: string;
  public mask: number;
  public amount: number;
  public transactionType: TransactionType;
  public currencyCode: CurrencyCode;
  public currencyName: string;
  public currencySymbol: string;
  public bitcoinAddress: string;
  public iban: string;
  public bic: string;

  constructor(init: IFinanseDTO) {
    this.account = +init.account;
    this.accountName = init.accountName;
    this.mask = +init.mask;
    this.amount = +init.amount;
    this.transactionType = init.transactionType as TransactionType;
    this.currencyCode = init.currencyCode as CurrencyCode;
    this.currencyName = init.currencyName;
    this.currencySymbol = init.currencySymbol;
    this.bitcoinAddress = init.bitcoinAddress;
    this.iban = init.iban;
    this.bic = init.bic;
  }

  public static crateFromFaker(): Finance {
    return new Finance({
      account: finance.account(),
      accountName: finance.accountName(),
      mask: finance.mask(),
      amount: finance.amount(),
      transactionType: finance.transactionType(),
      currencyCode: finance.currencyCode(),
      currencyName: finance.currencyName(),
      currencySymbol: finance.currencySymbol(),
      bitcoinAddress: finance.bitcoinAddress(),
      iban: finance.iban(),
      bic: finance.bic()
    });
  }
}
