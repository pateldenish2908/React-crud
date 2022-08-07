import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';

import HttpService from './services/HttpService';

function App() {
    // All States
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [users, setUsers] = useState([]); // User State
    const [showAddUser, setShowAddUser] = useState(false); // To reveal add user form

    // Pre-loader
    const preLoaderStop = () => {
        setloading(false);
    };

	// useEffect(() => {
       
	// 	setUsers(...users,[]);
    //     // eslint-disable-next-line
    // }, [])


    useEffect(() => {
		console.log("useEffect");
		// Fetching 
		HttpService.getAll().then((res) => {
			if (res.data.users.length == 0) {
				setUsers([])
			} else {
				setUsers(res.data.users);
			}
			preLoaderStop();
		});


    }, [])

    // Add User
    const addUser = (user) => {
        HttpService.create(user).then((res) => {
			preLoaderStop();
            alert('You have successfully added a new user!');
		});
    }

    // Delete User
    const deleteUser = (id) => {
        
        HttpService.delete(id).then((res) => {
			preLoaderStop();
            alert('You have successfully deleted a user!');
		});
    }

    // Edit User
    const editUser = (id) => {

        const text = prompt("User Name");
        const day = prompt("Day and Time");
        let data = JSON.parse(localStorage.getItem('userAdded'));

        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    text: text,
                    day: day,
                    id: Math.floor((Math.random() * 10000000000) + 1)
                }
            }
            return x;
        })
alert('You have successfully edited an existing user!');
        

        localStorage.setItem("userAdded", JSON.stringify(myData));
        window.location.reload();
    }

    return (
        <>
            {
                loading
                    ?
                    <div className="spinnerContainer">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="container">
                        {/* App Header that has open and App Name */}
                        <Header showForm={() => setShowAddUser(!showAddUser)} changeTextAndColor={showAddUser} />

                        {/* Revealing of Add User Form */}
                        {showAddUser && <AddUser onSave={addUser} />}

                        {/* User Counter */}
                        <h3>Number of Users: {users.length}</h3>

                        {/* Displaying of Users */}
                        {
                            users.length > 0
                                ?
                                (<Users users={users} onDelete={deleteUser} onEdit={editUser} />)
                                :
                                ('No User Found!')
                        }
                    </div>
            }
        </>
    )
}

export default App;