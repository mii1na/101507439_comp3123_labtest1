const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        // wait half a second then resolve
        setTimeout(() => {
            let success = { message: "delayed success!" };
            resolve(success);
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        // wait half a second then reject
        setTimeout(() => {
            let error = { error: "delayed exception!" };
            reject(error);
        }, 500);
    });
};

// run the success promise
resolvedPromise().then(result => console.log(result)).catch(error => console.log(error));
// run the rejected promise
rejectedPromise().then(result => console.log(result)).catch(error => console.log(error));