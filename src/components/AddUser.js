import { useState } from 'react';

const AddUser = ({ onSave }) => {
    const [name, setName] = useState('Denish');
    const [job, setJob] = useState('software');
    // const [lastName, setLastName] = useState('Denish');
    // const [avatar, setAvatar] = useState('avtar');
    // const [gender, setGender] = useState('male');
    // const [address, setAddress] = useState('surat');
    // const [country, setCountry] = useState('india');
    
    // const [hobbies, setHobbies] = useState('cricket');
    // const [createdAt, setCreatedAt] = useState('20210829');



    const onSubmit = (event) => {
        event.preventDefault();
        console.log("name",name);

        // if (!text && !day) {
        //     alert('Fill in your user and date or close the form!');
        // } else if (!text && day) {
        //     alert('Fill in your user!');
        // } else if (text && !day) {
        //     alert('Fill in your date!');
        // } else {
        //     onSave({ text, day });
        // }

        onSave({name, job});

        setName('');
        setJob('');


        // setName('')
        // setGender('')
        // setAddress('')
        // setCountry('')
        // setAvatar('')
        // setHobbies('')
        // setCreatedAt('')

    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name</label>
                <input type="text" placeholder="add name" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Job</label>
                <input type="text" placeholder="add job" value={name} onChange={(e) => setJob(e.target.value)} />

                {/* <label>Last name</label>
                <input type="text" placeholder="add last name" value={name} onChange={(e) => setLastName(e.target.value)} />
            
                <label>Avatar</label>
                <input type="text" placeholder="add avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} /> */}

                {/* <label>gender</label>
                <input type="text" placeholder="add gender" value={gender} onChange={(e) => setGender(e.target.value)} />
            
                <label>address</label>
                <input type="text" placeholder="add address" value={address} onChange={(e) => setAddress(e.target.value)} />
            
                <label>country</label>
                <input type="text" placeholder="add country" value={country} onChange={(e) => setCountry(e.target.value)} />
            
                <label>hobbies</label>
                <input type="text" placeholder="add hobbies" value={hobbies} onChange={(e) => setHobbies(e.target.value)} />
            
                <label>createdAt</label>
                <input type="text" placeholder="add createdAt" value={createdAt} onChange={(e) => setCreatedAt(e.target.value)} /> */}
            </div>

            <input type="submit" className="btn btn-block" value="Save User" />
        </form>
    )
}

export default AddUser
