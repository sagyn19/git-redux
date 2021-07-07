import React from 'react'

import RepoTable from './repoTable'

const Repos = ({ repos, userName }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <RepoTable repos={repos} userName={userName} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Repos
