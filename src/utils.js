// utils.js is for frontend to backend communication
// login函数接收一个参数叫credential（object数据类型）
export const login = (credential) => {
    // ES6组装的URL
    const loginUrl = `/login?username=${credential.username}&password=${credential.password}`;

    // fetch is a global function（浏览器自带的），配合then
    // 传2个参数：loginUrl，page参数？
    return fetch(loginUrl, {
        method: "POST",
        headers: {   
            "Content-Type": "application/json",  // 数据传输格式
        },
        credentials: "include",  // 是否带cookie
    }).then((response) => {  // fetch里面的请求回来后则执行then里面的函数
        // response是后端写的，浏览器会解析
        if (response.status < 200 || response.status >= 300) {  // 判断好或者坏请求
            throw Error("Fail to log in");  // 坏请求throw error
        }
    });
};

export const signup = (data) => {
    const signupUrl = "/signup";

    return fetch(signupUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Fail to sign up");
        }
    });
};

export const getMenus = (restId) => {
    return fetch(`/restaurant/${restId}/menu`).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Fail to get menus");
        }

        return response.json();  // 额外解析才能变成JavaScript里的object
    });
};

export const getRestaurants = () => {
    return fetch("/restaurants").then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Fail to get restaurants");
        }

        return response.json();
    });
};

export const getCart = () => {
    return fetch("/cart").then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Fail to get shopping cart data");
        }

        return response.json();
    });
};

export const checkout = () => {
    return fetch("/checkout").then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Fail to checkout");
        }
    });
};

export const addItemToCart = (itemId) => {
    return fetch(`/order/${itemId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Fail to add menu item to shopping cart");
        }
    });
};