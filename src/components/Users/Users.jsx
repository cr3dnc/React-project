import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage, onPageChanged, totalPage, pageSize, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalPage={totalPage} pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u}
                    toggleButtonDisable={props.toggleButtonDisable}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    key={u.id} />
                )}
        </div>
    </div>
}

export default Users;