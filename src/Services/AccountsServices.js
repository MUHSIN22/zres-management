const BASE_URL= process.env.REACT_APP_BASE_URL;

export const accountServices = {
    // Account Group
    getAccountGroupData : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}AccountGroup?CMPid=1`)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },
    uploadAccountGroupData : (data) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}AccountGroup`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    },

    // Account Head
    uploadAccountHeadData : (data) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}AccountHead`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    },
    getAccountHeadData : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}AccountHead?CMPid=1`)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    getAccountHeadDropdown : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}AccountHead/GetAccountGroupName?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // Supplier Payment

    getTransactionSupplierPayments : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}SupplierPayment?CMPid=1`)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    getSuppliers : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}SupplierPayment/GetSupplierName?CMPid=1`)
            .then(res => res.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    getSupplierByFilter: (from,to,supplier) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}SupplierPayment/search?supplier=${supplier}&fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    
    // Opening balance
    getOpeningBalance : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Balance?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // Debit note
    getAllDebitNote : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}DebitNote?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredDebitNote: (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}DebitNote/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // Credit Notes
    getAllCreditNotes : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}CreditNote?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFiltereCreditNotes : (from,to) => {
        return new Promise((resolve,reject) => {
            // /CreditNote/search?fromdate=2020-01-01&todate=2022-12-12&CMPid=1
            // /CreditNote/search?fromdate=2022-03-15&todate=2022-03-18&CMPid=1
            fetch(`${BASE_URL}CreditNote/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // Transactions 
    // >>Journel
    getJournelDropDown : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Journal/GetAccountHeadName?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getJournelData : () => {
      return new Promise((resolve,reject) => {
          fetch(`${BASE_URL}Journal?CMPid=1`)
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err))
      })  
    },
    getFilteredJournel : (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Journal/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    uploadJournel : (data) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Journal?CMPid=1`,{
                method: "POST",
                headers: {
                    'Content-Type':"application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    //-----------------Reports
    //>>>>>>>>>>>>>>>>Ledger
    getAllLedger : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Ledger?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getLedgerDropDown: () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Ledger/GetAccountHeadName?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredLedger: (id,from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Ledger/search?Account=${id}&fromdate=${from}&todate=${to}&CMPid=1`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },

    // >>Cash flow
    getAllCashFlow : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}CashFlow/GetAllCashFlow?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredCashFlow : (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}CashFlow/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    // >>>>>>>>>>>>>>>>>cash book
    getAllCashBook : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}CashBook/GetAllCashBook?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredCashBook : (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}CashBook/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // >>>>>>>>>>>>>>>>>>>Bank book
    getAllBankBook : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}BankBook/GetAllBankBook?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredBankBook : (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}BankBook/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },


    // Contra
    getAllContra : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Contra?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getContraDropDown: () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Contra/GetAccountHeadName?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredContra : (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Contra/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => console.log(err))
        })
    },
    uploadContra : (data) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Contra?CMPid=1`,{
                method: "POST",
                headers: {
                    'Content-Type':"application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // Reciept 
    getAllReciept : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Reciepts?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredReciept : (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Reciepts/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getRecieptCreditDropDown: () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Reciepts/GetCreditAccountName?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getRecieptDebitDropDown : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Reciepts/GetDebitAccountName?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    },
    uploadReciept : (data) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Reciepts?CMPid=1`,{
                method: "POST",
                headers: {
                    'Content-Type':"application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // Payments
    getAllPayment : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Payments?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredPayment : (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Payments/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getPaymentCreditDropDown: () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Payments/GetCreditAccountName?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getPaymentDebitDropDown : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Payments/GetDebitAccountName?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    },
    uploadPayment : (data) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}Payments?CMPid=1`,{
                method: "POST",
                headers: {
                    'Content-Type':"application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // Daybook
    getAllDayBook : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}DayBook?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredDayBook : (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}DayBook/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // Profit and lose
    getProfitAndLose : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}ProfitAndLoss?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredProfitAndLose : (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}ProfitAndLoss/search?fromdate=${from}&todate=${to}&CMPid=1`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },

    // Balance sheet
    getAllBalancesheet : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}BalanceSheet/GetAllBalanceSheet?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    },
    getFilteredBalancesheet : (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}BalanceSheet/search?fromdate=${from}&todate=${to}&CMPid=1`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
}