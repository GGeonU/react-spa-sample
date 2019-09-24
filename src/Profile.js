import React from 'react'

const data = {
    geonu: {
        name: '건우',
        text: '건우입니다'
    },
    geonho: {
        name: '건호',
        text: '건호입니다'
    },
};

const Profile = ({match}) => {
    console.log({match});
    const {username} = match.params;
    const profile = data[username];

    if(!profile){
        return <div>존재하지 않습니다.</div>
    }

    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.text}</p>
        </div>
    )
};

export default Profile;