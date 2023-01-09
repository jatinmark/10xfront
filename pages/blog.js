import Header from "../components/Header"
import Footer from "../components/Footer";
import { getblogs } from "../services/api";
import styles from "../styles/Blog.module.css";
import React , {useState , useEffect} from "react"

const Blog = () => {

  
  let [blogs , setblogs] = useState([]);


  useEffect(() => {
      const getblogsdetails = async()=>{
     let data = await getblogs();
    setblogs(data);
}
getblogsdetails();
}
,[])


  return (
    <div>
        { blogs.map((blog ,i) => {  return (
          <div>
      <Header />
     
      <div className={styles.container}>
    
        <h2 className={styles.headerh2}>
        {blog.title}
        </h2>
        <img src="/images/line.png" style={{ marginLeft: "28em" }}></img>
        <p className={styles.headerP}>
          Last Updated on {blog.published} by {blog.name}
        </p>
        <p className={styles.headerP} style={{ marginTop: "2px" }}>
          2 mins read
        </p>
        <div className={styles.grid}>
          <div className={styles.grid1}>
            <img src="/images/blog_image1.png"></img>
          </div>
          <div className={styles.grid2}>
            <div className={styles.searchbar}>
              <h4>Search Blogs</h4>
              <div className={styles.searchInput}>
                <input placeholder="Type here" />
                <div className={styles.searchIcon}>
                  <img src="/images/search.png"></img>
                  <p>Search</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid3}>
            <h4>Recent Blogs</h4>

            <div className={styles.sectionthree}>
              <div className={styles.sectionThreePartOne}>
                <img src="/images/blog_image3.png"></img>
                <div>
                  <h4>A 2022 Guide to How to Build Your own Mobile App</h4>
                  <a>Read More</a>
                </div>
              </div>

              <div className={styles.sectionThreePartTwo}>
                <img src="/images/blog_image4.png"></img>
                <div>
                  <h4>Bioinformatics and its Sub Disciplines</h4>
                  <a>Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.article}>
          <p>
            {blog.description}
          </p>
         

        </div>
      </div>

      <Footer />
      </div>
      )
        })}
    </div>
  );
};

export default Blog;
