// class Ajax {
//     post(url, callback) {
//         let xhr = new XMLHttpRequest()
//         xhr.open('POST', url)
//         xhr.send()

//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 const data = JSON.parse(xhr.response)
//                 callback(data)
//             }
//         }
//     }
// }
// export const ajax = new Ajax();


let cause
class Ajax {
    async post(url) {
        const ps = await new Promise((resolve, reject) =>{
            let xhr = new XMLHttpRequest()
            xhr.open('POST', url)
            xhr.send()

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    const data = JSON.parse(xhr.response)
                    resolve(data)
                } else {
                    cause = err;
                    resolve(undefined)
                    //reject(new Error(`Request failed: ${xhr.statusText}`))
                }
            }
        })
        if (ps) {
            return ps;
        } else if (cause instanceof Error) {
            throw cause;
        } else {
            throw new Error('invalid token');
        }
    }
}

export const ajax = new Ajax();















// let cause
// class Ajax {
//     async post(url) {
//         const rv = await new Promise((resolve, reject) =>{
//             let xhr = new XMLHttpRequest()
//             xhr.open('POST', url)
//             xhr.send()

//             xhr.onreadystatechange = () => {
//                 if (xhr.readyState === 4) {
//                     const data = JSON.parse(xhr.response)
//                     resolve(data)
//                 } else {
//                     cause = err;
//                     resolve(undefined)
//                     //reject(new Error(`Request failed: ${xhr.statusText}`))
//                 }
//             }
//         })
//         if (rv) {
//             return rv;
//         } else if (cause instanceof Error) {
//             throw cause;
//         } else {
//             throw new Error('invalid token');
//         }
//     }
// }

// export const ajax = new Ajax();