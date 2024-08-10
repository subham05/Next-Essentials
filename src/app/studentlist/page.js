
import Link from 'next/link'
import React from 'react'

const StudentList = () => {
  return (
    <div>
      <ul>
        <li ><Link href="/studentlist/anil">Anil</Link></li>
        <li><Link  href="/studentlist/sumit">Sumit</Link></li>
      </ul>
    </div>
  )
}

export default StudentList