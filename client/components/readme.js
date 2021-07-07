import React from 'react'
import { useSelector } from 'react-redux'
import Markdown from 'markdown-to-jsx'
import './main.css'

const Readme = () => {
  const readme = useSelector((s) => s.data.readme)
  return <Markdown>{readme}</Markdown>
}

export default Readme
