export const load = async ({fetch}) => {

    const blogPosts = await fetch('http://0.0.0.0:8055/items/blogpost')
    const blogPostObject = await blogPosts.json()
    const blog = blogPostObject.data

    console.log(blogPostObject)

    return {
        blog
    }

}
