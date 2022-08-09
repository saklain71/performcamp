import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        // console.log("inside token", user);
        const name = user?.user?.displayName ;
        const email = user?.user?.email;
        const image = user?.user?.photoURL;
        const currentUser = {
            name: name,
            email: email,
            image: image
        };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log('data inside useToken', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                })
        }

    }, [user]);

    return [token];
}

export default useToken;