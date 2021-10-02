import React from 'react'
import { useRouter } from 'next/router'

const Page = ({ note }) => {

	console.log(note)

	return (
		<div className="note-id-page">
			<h1>Your note</h1>
			{note.title}
			<p>{`Title = ${note.title}`}</p>
				<button onClick={e => router.push('/notes')}>
					go back
				</button>
		</div>
	)
}

export default Page

export async function getServerSideProps({ params, req, res }) {

	const BASE_PATH = process.env.API_BASEPATH
  const response = await fetch(`${BASE_PATH}/api/note/${params.id}`)

	console.log(`${BASE_PATH}/api/note/${params.id}`)

	if (!response.ok) {
		response.writeHead(302, {
			location: '/notes'
		})

		res.end()

		return {
			props: {}
		}
	}

	console.log(response.data)
	
  const { data } = await response.json()

  return {
    props: { note: data }
  }
}
