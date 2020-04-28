import PostsList from 'src/components/Admin/PostsList'

export const QUERY = gql`
  query ALL_POSTS {
    posts {
      posts {
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
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ posts }) => {
  return <PostsList posts={posts.posts} />
}
