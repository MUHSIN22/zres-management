const BASE_URL = process.env.REACT_APP_BASE_URL;

export const kdcServices = {
    getAllOrders : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}OrdersKDS/GetAllOrders?CMPid=1`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },

    getOrderByStatus : (status) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}OrdersKDS/GetOrdersByStatus?OrderStatus=${status}&CMPid=1`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },

    getItemSummary : () => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}OrdersKDS/ItemSummary?CMPid=1`)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    },

    startOrder : (orderId) => {
        return new Promise((resolve,reject) => {
            fetch(`${BASE_URL}OrdersKDS/StartSettingBtnClick?OrderID=${orderId}&CMPid=1`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}