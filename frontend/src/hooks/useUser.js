import React, { useEffect, useState } from 'react'

const useUser = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {

        const fetchUserData = async() => {

            try {
                const res = await fetch("api/user/fetch");

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                  }
                const userData = await res.json();
                setUser(userData);

                // console.log(user)
            } catch (error) {
                console.log("error", error.message);
            }
        }
        fetchUserData();
    }, [])

    return {user} 
  
}

export default useUser;