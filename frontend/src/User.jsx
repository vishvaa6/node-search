import React, { useState } from 'react'

const User = ({ users }) => {

    const [search, setSearch] = useState();
    const [details, setUserDeatils] = useState();

    const filterdUser = users.filter(user => user.name.toLowerCase().includes(search));

    const userdata = users.filter(user => user._id.includes(details))
    console.log(userdata)

    return (
        <div className='p-15'>
            <div>
                <input placeholder='Search' className='w-72 font-sans font-semibold bg-white shadow-2xl h-10 outline-none rounded-4xl p-5' type='text' onChange={(e) => setSearch(e.target.value)} ></input>
            </div>

            <div className='rounded-2xl p-2 mt-5 h-60 max-h-60 w-72 overflow-y-auto bg-white shadow-2xl scroll-container'>
                {
                    !search ? <h1 className='text-center font-bold hover:bg-blue-300 text-sky-900 rounded-2xl'><p onClick={() => setUserDeatils(null)}>Search For User</p></h1>
                        :
                        filterdUser.length == 0
                            ?
                            <h1 className='text-center font-bold hover:bg-blue-300 text-sky-900 rounded-2xl '>{`NO '${search}' EXIST`}</h1>
                            :
                            filterdUser.map((user, index) =>
                            (
                                <>
                                <p key={index} className={`p-1.5 font-sans font-semibold hover:bg-blue-200 ${details == user._id ? 'bg-blue-300' : ''} text-black rounded-2xl`} onClick={() => setUserDeatils(user._id)} >{user.name}</p>
                                <div className='border-b-1 border-gray-200'></div>
                                </>
                            )

                            )
                }
            </div>

            
                {
                    !details ?
                            (
                            <div className='font-semibold text-center transition-[10] bg-white mt-10  rounded-3xl'>Click an User to See info</div>
                        ) : (

                            <div className='flex justify-center text-base/8 font-semibold h-37 transition-[10] bg-white mt-10 p-1.5 rounded-3xl'>
                                <div>
                                <h1><span>NAME : </span>{userdata[0].name}</h1>
                                <h1><span>AGE : </span>{userdata[0].age}</h1>
                                <h1><span>EMAIL : </span>{userdata[0].email}</h1>
                                <h1><span>JOB : </span>{userdata[0].job}</h1>
                                </div>
                            </div>
                        )

                }
           
        </div>
    )
}

export default User