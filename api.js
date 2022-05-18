const backend_base_url = "http://127.0.0.1:5001"
const frontend_base_url = "http://127.0.0.1:5500"


async function handleSignin() {
    const signupData = {
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value
    }

    const response = await fetch(`${backend_base_url}/signup`, {
        method: 'POST',
        body: JSON.stringify(signupData)
    })

    response_json = await response.json()
    console.log(response_json)


    if (response.status == 200) {
        window.location.replace(`${frontend_base_url}/login.html`)
    } else {
        alert(response.status)
    }
}


async function handleLogin() {
    console.log("handle login")

    const loginData = {
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value
    }

    const response = await fetch(`${backend_base_url}/login`, {
        method: 'POST',
        body: JSON.stringify(loginData)
    })

    console.log(response)
    response_json = await response.json()
    console.log(response_json)
    localStorage.setItem("token", response_json.token)
    // 브라우저 자체 url에 로컬 스토리지에 저장

    if (response.status == 200) {
        window.location.replace(`${frontend_base_url}`)
    } else {
        alert(response.status)
    }
}


async function getName() {
    console.log("get Name")
    console.log(localStorage.getItem("token"))

    const response = await fetch(`${backend_base_url}/getuserinfo`, {
        headers: {
            'Authorization': localStorage.getItem("token")
        }
    })
    response_json = await response.json()
    console.log(response_json)

    const username = document.getElementById("username")
    username.innerText = response_json.email

}


// async function handleSignup() {
//     console.log("handleSignup")

//     const signData = {
//         id: document.getElementById("floatingInput").value,
//         pw: document.getElementById("floatingPassword").value
//     }

//     const response = await fetch('http://127.0.0.1:5001/signup', {
//         method: 'POST',
//         body: JSON.stringify(signData)
//     }
//     )
//     console.log(response)

//     response_json = await response.json()
//     console.log(response_json)

//     if (response.status == 200) {
//         window.location.replace("http://127.0.0.1:5500/frontend/login.html");
//     } else {
//         alert(response.status)
//     }
// }


// async function handleLogin() {
//     console.log("handle login")

//     const loginData = {
//         email: document.getElementById("floatingInput").value,
//         password: document.getElementById("floatingPassword").value
//     }

//     const response = await fetch(`${backend_base_url}/login`, {
//         method: 'POST',
//         body: JSON.stringify(loginData)
//     })

//     console.log(response)
//     response_json = await response.json()
//     console.log(response_json)
//     localStorage.setItem("token", response_json.token)
//     // 브라우저 자체 url에 로컬 스토리지에 저장

//     if (response.status == 200) {
//         window.location.replace(`${frontend_base_url}`)
//     } else {
//         alert(response.status)
//     }
// }


// async function getName() {
//     console.log("get Name")
//     console.log(localStorage.getItem("token"))

//     const response = await fetch(`${backend_base_url}/getuserinfo`, {
//         headers: {
//             'Authorization': localStorage.getItem("token")
//         }
//     })
//     response_json = await response.json()
//     console.log(response_json)

//     const username = document.getElementById("username")
//     username.innerText = response_json.email

// }