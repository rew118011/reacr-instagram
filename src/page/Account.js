import React from 'react'
import Profile from '../component/Profile';
import Showimg from '../component/Showimg';

const Account = (props) => {
    return (
        <>
            <Profile id={props.match.params.id} />
            <Showimg id={props.match.params.id} />

        </>
    )
}

export default Account
