import { categoryColors } from "./Styles"

function MasonryPost({post, tagsOnTop}) {
  const windowWitdth = window.innerWidth
    const imageBackground = {backgroundImage: `url(${require(`../../Assets/imagesC/${post.image}`)})`}

    const style = windowWitdth > 900 ?  {...imageBackground, ...post.style} : imageBackground
  return (
    <a href={post.link} className="masonry-post overlay" style={style}>
        <div className="image-text" style={{justifyContent: tagsOnTop ? 'space-between' : 'flex-end'}}>
          <div className="tags-container">
          {
            post.categories.map((tag, ind) => (
              <span key={ind} className="tag" style={{ backgroundColor: categoryColors[tag] }}>
                {tag.toUpperCase()}
              </span>
            ))
          }
          </div>
          <div>
            <h2 className="image-title">{post.title}</h2>
            <span className="image-date">{post.date}</span>
          </div>
        </div>
    </a>
  )
}
export default MasonryPost