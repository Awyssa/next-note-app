import React from 'react'
import Link from 'next/link'

const Page = ({ notes }) => {
	return (
		<div>
			<h1>notes index page</h1>
			<div style={{ padding: "0 30px"}}>
			{notes.map(note => (
				<div key={note.id}>
					<Link href="/notes/[id]" as={`/notes/${note.id}`}>
						<a>
							<h3>{note.title}</h3>
						</a>
					</Link>
				</div>
			))}
			</div>
		</div>
	)
}
export default Page;

export async function getServerSideProps() {

	const BASE_PATH = process.env.API_BASEPATH
  const response = await fetch(`${BASE_PATH}/api/note`)
  const { data } = await response.json()

  return {
    props: { notes: data }
  }
}
