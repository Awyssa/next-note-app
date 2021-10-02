import React from 'react'
import Link from 'next/link'

const Page = (props) => {
  return (
    <div>
      <p>hello world</p>

      <Link href="/notes">
        <a>
          <b>Take me to the notes</b>
        </a>
      </Link>
    </div>
  )
}
export default Page


export async function getServerSideProps() {	
	return {
    props: {}
  }
}
