const BASE_URL= process.env.REACT_APP_BASE_URL;

export const crmServices = {

    getAllcustomer : ()=>{
        return new Promise((resolve, reject)=>{
            fetch(`${BASE_URL}Customer?CMPid=1`)
            .then(res=> res.json())
            .then(data=> resolve(data)).catch(err => reject(err));
        })
    },
    
    AddCustomer : (data)=>{
        return new Promise((resolve, reject) => {
            fetch(`${BASE_URL}Customer?CMPid=1`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
               body: JSON.stringify({
                   
                "CName": `${data.name}`,
                "Phone": `${data.phoneNumber}`,
                "AlternativePhone": `${data.AlternatePhone}`,
                "LoginId": "1",
                "Password": "XV",
                "Email": `${data.Email}`,
                "JoiningDate": "2022-04-02",
                "Address": `${data}`,
                "Place": `${data}`,
                "CMPid": 1,
                "LoyaltyPoint": null,
                "IsRedemed": `${data.Loyality}`
               })
            }).then(res => res.json())
            .catch(err => reject(err))
        })
    }
} 