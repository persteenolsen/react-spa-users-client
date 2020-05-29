import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { accountService, alertService } from '@/_services';

function List({ match }) {
    const { path } = match;
    const [users, setUsers] = useState(null);

    useEffect(() => {
        accountService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
	
       if (confirm('Are you sure?')) {
	   
	       setUsers(users.map(x => {
             if (x.id === id) { x.isDeleting = true; }
                return x;
            }));
		   
            accountService.delete(id)
			.then(( response ) => {
                alertService.success( response['message'], { keepAfterRouteChange: true });
             })
			.then(() => {
			     setUsers(users => users.filter(x => x.id !== id));
             })
			
		    .catch( error => {
			     alertService.error( error );
				 window.location.reload( false );							 				
            });
		  		  
		
	  }
    }

    return (
        <div>
            <h1>Users</h1>
            <p>Scroll the Users section to the left for making the Edit and Delete buttons apears on small devices !</p>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add User</Link>
			<div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Email</th>
                        <th style={{ width: '30%' }}>Role</th>
                        <th style={{ width: '10%' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.title} {user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                                <Link to={`${path}/edit/${user.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger" style={{ width: '60px' }} disabled={user.isDeleting}>
                                    {user.isDeleting 
                                        ? <span className="spinner-border spinner-border-sm"></span>
                                        : <span>Delete</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    )}
                    {!users &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <span className="spinner-border spinner-border-lg align-center"></span>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
			</div>
        </div>
    );
}

export { List };