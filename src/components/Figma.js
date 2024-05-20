import React from 'react'
import styles from '../Styles/Figma.module.css'
import image from '../images/illustrator.png'
import tick from '../images/tick.png'
import { color } from '@mui/system'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const Figma = () => {

    const data = [
       { title:"Add maximum details to your answer",img:tick},
       { title:"There should be no plagiarism and negative content about the college",img:tick},
       { title:"Review should be written only for the courses offered by the college",img:tick},
       { title:"Mention facts and figures as per your best knowledge",img:tick},
       { title:"A good validated review will also lead to better reward",img:tick},
    ]


  return (
    <>
    <div className={styles.heading}>
        <h3>Rules and Guidelines</h3>
        </div>
        <div className={styles.box}>
            <container  >
                <img src={image} className={styles.img} alt='image'></img>
            </container>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start'}}>
             
              <h2 className={styles.key}>Key Points</h2>
              <div >
              {data.map((val,key)=>{
                return <div key = {key} className = {styles.keypoint}>
                    <img src={val.img} className = {styles.logo} alt='tick'></img>
                    <div className={styles.subpoints}>{val.title}</div>
                </div>
                    
                
              })}
               </div>
            </div>
        </div>
        <div className={styles.btndiv} >
            <button className={styles.btn}>Read Terms & Guidelines</button>
        </div>
         
         {/* Second box */}
        <div className={styles.secndbox}>
         <div className={styles.secndtext}>
         Help millions of students in making informed career decisions.
         </div>
         <div>
         <button className={styles.secndbtn}>Write a review and win ₹200</button>
         </div>
        </div>


        {/* footer */}
      
      <div className={styles.headercontainer}>
         <div >
         <div className={styles.headerleft}>Rewards & Review</div>
         <div className={styles.formcont}>
      <div className={styles.formtext}>Get started now, try our product!</div>
            <form className={styles.form}>
                <div className={styles.formwrap}>
                <input type="email" placeholder="Enter your email here"></input>
                <div className={styles.formbutton}><ArrowForwardIcon/></div>
                </div>
            </form>
      </div>
         </div>
         <div >
          <div className={styles.listcontainer}>
          <div className={styles.headerright}>
                        <div className={styles.footerheading}>Support
                            <div className={styles.footersubheading}>
                                <div>Help Center</div>
                                <div>Account information</div>
                                <div>About</div>
                                <div>Contact us</div>
                            </div>
                        </div>
                        <div className={styles.footerheading}>Help and Solution
                            <div className={styles.footersubheading}>
                                <div>Talk to support</div>
                                <div>Support docs</div>
                                <div>System status</div>
                                <div>Covid responde</div>
                            </div>
                        </div>
                        <div className={styles.footerheading}>Product
                            <div className={styles.footersubheading}>
                                <div>Update</div>
                                <div>Security</div>
                                <div>Beta Test</div>
                                <div>Pricing product</div>
                            </div>
                        </div>
                        
                    </div>
          </div>
         </div>
      </div>
      <div className={styles.finalfooter}>
        <div className={styles.copyright}>© 2023 Rewards&Review Inc. Copyright and rights reserved</div>
        <div className={styles.terms}>
        <div>Terms and Condtions</div>
        <FiberManualRecordIcon style={{paddingTop:'5px',height:'8px',width:'8px'}}/>
        <div>Privacy Policy</div>
        </div>
      </div>

    </>
  )
}

export default Figma