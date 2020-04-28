import Post from 'src/components/Blog/Post'
import Pagination from 'src/components/Blog/Pagination'

export const beforeQuery = ({ page, perPage }) => {
  page = page ? parseInt(page) : 1
  return { variables: { first: (page - 1) * perPage, last: page * perPage } }
}

export const QUERY = gql`
  query ALL_POSTS_PAGED($first: Int, $last: Int) {
    posts(first: $first, last: $last) {
      id
      title
      slug
      author
      body
      image
      postedAt
      tags {
        id
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

const sortedPosts = (posts) => {
  return posts.sort((a, b) => {
    if (new Date(a.postedAt) < new Date(b.postedAt)) return 1
    if (new Date(a.postedAt) > new Date(b.postedAt)) return -1
    return 0
  })
}

export const Success = ({ posts, page, perPage }) => {
  return (
    <>
      {sortedPosts(posts).map((post) => (
        <Post key={post.id} post={post} summary={true} />
      ))}
      <Pagination count={posts.count} page={page} perPage={perPage} />
    </>
  )
}
