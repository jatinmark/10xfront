import React , {useState , useEffect} from "react"
import Link from "next/link";
import styles from "../../styles/blogs/Hero.module.css";
import { getblogs } from "../../services/api";

const Hero = () => {


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
    <div className={styles.container}>
      <h2 className={styles.headerh2}>
        Welcome to Our <span style={{ color: "#FF242A" }}>Blogs</span>
      </h2>
      <img src="/images/line.png" style={{ marginLeft: "28em" }}></img>
      <p className={styles.headerP}>
        Stay updated with the newest design and development stories, cases
        studies,
      </p>
     
      <div className={styles.grid}>
        <div className="blogs">
      { blogs.map((blog ,i) => {  return (
        <div className={styles.grid1}>
          <div className={styles.sectionOne}>
            <img src={blog.img}></img>

            <div className={styles.sectionText}>
              <h3>{blog.title}</h3>
              <p>
                {blog.subtitle} 
              </p>
              <Link href="/blog" className={styles.link}>
                Read More
              </Link>
            </div>
          </div>
        </div> )
        })}
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

        {/* <div className={styles.grid3}>
          <div className={styles.sectiontwo}>
            <img src="/images/blog_image2.png"></img>

            <div className={styles.sectionTwoText}>
              <h3>How to Use the Google Keyword Planner Tool</h3>
              <p>
                How to Use the Google Keyword Planner Tool Do you want to
                enhance organic traffic to your website
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div> */}
        <div className={styles.grid4}>
      
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
    </div>
  );
}

export default Hero
