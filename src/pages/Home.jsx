import Featured from '../Assets/mocks/Featured'; // Importing the Featured data array from the mocks directory
import Trending from '../Assets/mocks/Trending'; // Importing the Trending data array from the mocks directory
import MasonryPost from "../components/common/MasonryPost"; // Importing the MasonryPost component to display individual posts in a masonry layout
import PostMasonry from "../components/common/PostMasonry"; // Importing the PostMasonry component to display multiple posts in a masonry layout

const trending = Trending; // Assigning the Trending data to a variable for easy reference
const featured = Featured; // Assigning the Featured data to a variable for easy reference

// Configuration object to define grid styles for specific trending posts
const trendingConfig = {
  1: {
    gridArea: '1 / 2 / 3 / 3', // Sets the grid area for the second post to span two columns
  },
};

// Configuration object to define grid styles for specific featured posts
const featuredConfig = {
  0: {
    gridArea: '1 / 1 / 2 / 3', // Makes the first post span across the top two columns
    height: '300px', // Sets the height of the first post
  },
  1: {
    height: '300px', // Sets the height for the second post
  },
  3: {
    height: '630px', // Sets the height for the fourth post
    marginLeft: '30px', // Adds left margin to the fourth post for spacing
    width: '630px', // Sets the width of the fourth post
  }
};

// Function to merge custom styles into each post object without mutating the original post array
const mergeStyles = (posts, config) => {
  return posts.map((post, index) => ({
    ...post, // Spread operator to copy the existing post properties
    style: config[index] || {}, // Add the style property from config or an empty object if none exists
  }));
};

// Creating a new array of trending posts with applied styles using the trendingConfig
const trendingWithStyles = mergeStyles(trending, trendingConfig);

// Creating a new array of featured posts with applied styles using the featuredConfig
const featuredWithStyles = mergeStyles(featured, featuredConfig);

// Extracting the last featured post without mutating the original array
const lastFeatured = featuredWithStyles.slice(-1)[0]; // Gets the last element from the array
const remainingFeatured = featuredWithStyles.slice(0, -1); // Gets all elements except the last

// Home component rendering the featured and trending posts sections
const Home = () => {
  return (
    <section className="container home"> {/* Main container for the Home component */}
      <div className="row"> {/* Row container for layout purposes */}
        <h1>Featured posts</h1> {/* Title for the featured posts section */}
        <section className="featured-post-container"> {/* Container for featured posts */}
          <PostMasonry posts={remainingFeatured} columns={2} tagsOnTop={true} /> {/* Masonry layout for remaining featured posts */}
          {lastFeatured && <MasonryPost post={lastFeatured} tagsOnTop={true} />} {/* Single post layout for the last featured post, only rendered if lastFeatured exists */}
        </section>
        <h1>Trending Posts</h1> {/* Title for the trending posts section */}
        <PostMasonry posts={trendingWithStyles} columns={3} /> {/* Masonry layout for trending posts */}
      </div>
    </section>
  );
};

export default Home; // Exporting the Home component for use in other parts of the application
