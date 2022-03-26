const BASE_URL= process.env.REACT_APP_BASE_URL;

export const accountServices = {
    // Account Group
    getAccountGroupData : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}/AccountGroup?CMPid=1`)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },

    // Account Head
    getAccountHeadData : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}/AccountHead?CMPid=1`)
            .then(res => res.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    // Supplier Payment

    getTransactionSupplierPayments : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}/SupplierPayment?CMPid=1`)
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
            fetch(`${BASE_URL}/SupplierPayment/GetSupplierName?CMPid=1`)
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
            fetch(`${BASE_URL}/SupplierPayment/search?supplier=${supplier}&fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    
    // Opening balance
    getOpeningBalance : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}/Balance?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // Debit note
    getAllDebitNote : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}/DebitNote?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFilteredDebitNote: (from,to) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}/DebitNote/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },

    // Credit Notes
    getAllCreditNotes : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}/CreditNote?CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    },
    getFiltereCreditNotes : (from,to) => {
        return new Promise((resolve,reject) => {
            // /CreditNote/search?fromdate=2020-01-01&todate=2022-12-12&CMPid=1
            // /CreditNote/search?fromdate=2022-03-15&todate=2022-03-18&CMPid=1
            fetch(`${BASE_URL}/CreditNote/search?fromdate=${from}&todate=${to}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}