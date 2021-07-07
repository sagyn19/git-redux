import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const SearchUser = ({ userName }) => {
  const [userLogin, setUserLogin] = useState('')
  const history = useHistory()
  return (
    <div>
      {!userName && (
        <div className="mt-1 relative shadow-sm w-full h-screen flex items-center justify-center">
          <input
            type="text"
            name="price"
            className=" w-1/4 border-blue-500 border-2 rounded-md"
            onKeyPress={(e) => e.key === 'Enter' && history.push(`/${userLogin}`)}
            value={userLogin}
            placeholder="Please enter the name"
            onChange={(e) => setUserLogin(e.target.value)}
          />
          <Link to={`/${userLogin}`} className="bg-green-600 mx-2 p-2 text-white rounded-md">
            {' '}
            Search{' '}
          </Link>
        </div>
      )}
    </div>
  )
}

export default SearchUser
