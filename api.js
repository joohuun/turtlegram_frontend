async function handleSignin() {

    const signData = {
        id: document.getElementById("floatingInput").value,
        pw: document.getElementById("floatingPassword").value
    }

    const response = await fetch('http://127.0.0.1:5001/signup', {
        method: 'POST',
        body: JSON.stringify(signData)
    }
    )

    console.log.apply(response)

}


// function openbox() {
//     console.log('here3')
// }