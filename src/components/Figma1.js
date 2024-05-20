import React from 'react'
import styles from '../Styles/Figma1.module.css'
import { useState } from 'react';
import logo from '../images/maincrown.svg'
import profile from '../images/profile1.svg'
import badge from '../images/badge.svg'
import linkdn from '../images/linkdn.svg'
import paytm from '../images/paytm.svg'
import speaker from '../images/speaker.svg'
import trophy from '../images/trophy.svg'
import logo2 from '../images/crown.svg'

const data = [
    {
        Name:'Suraj Khandwal',
        Address:'Rohini, Delhi',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal ',
        Address:'Bhiwadi, Rajasthan',
        profileimg:profile,
        points:'8300',
    },
    {
        Name:'Suraj Khandwal ',
        Address:'Gurugram, Haryana',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Gurugram, Haryana',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Gurugram, Haryana',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Najafgarh, Delhi',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Jaipur, Rajasthan',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Jaipur, Rajasthan',
        profileimg:profile,
        points:'9300',
    },
    {
        Name:'Suraj Khandwal',
        Address:'Jaipur, Rajasthan',
        profileimg:profile,
        points:'9300',
    },
]
const Figma1 = () => {
    const [selectedOption, setSelectedOption] = useState('monthly');
    const toggleSelection = (option) => {
        setSelectedOption(option);
      };
     console.log(selectedOption);
  return (
    <>
    <div className={styles.parent}>
    <div className={styles.heading}>Top 10 Campus Ambassador Performers</div>
    <div className={styles.subheadingcont}>
    <div className={styles.subheading}>

        <button className={selectedOption === 'monthly' ? styles.active : ''} onClick={() => toggleSelection('monthly')}><div>Monthly</div></button>
        <button className={ selectedOption === 'Quarterly' ? styles.active : ''} onClick={() => toggleSelection('Quarterly')}><div>Quarterly</div></button>

    </div>
    </div>



       {data.map((val,key)=>{
        return <>
        
    <div className={styles.parent2}>
    <div className={styles.parentcont}>
        <div className={styles.firstdiv}>
           <div className={styles.mainlogodiv}> 
            <img className={styles.crownimg} src={ key+1=== 1 ? logo :logo2}></img>
            <div>{key+1}</div>
            </div>
            <div className={styles.firstsubdiv}>
                <img src={val.profileimg}></img>
                <div>
                    <div className={styles.firstdivtext}>{val.Name}</div>
                    <div className={styles.firstdivtext2}>{val.Address}</div>
                </div>
            </div>
        </div>

        <div className={styles.seconddivparent}>
        <div className={styles.seconddiv}>
         <div className={styles.seconddivtext}>Achievement</div>
         <div className={styles.seconddivimg}>
            <img src={badge}></img>
         </div>
         <div className={styles.seconddivimg}>
            <img src={linkdn}></img>
         </div>
         <div className={styles.seconddivimg}>
            <img src={paytm}></img>
         </div>
         <div className={styles.seconddivspeakerimg}>
            <img src={speaker}></img>
         </div>
        </div>
        </div>

        <div className={styles.thirddiv}>
        <div className={styles.seconddivspeakerimg}>
            <img src={trophy}></img>
         </div>
         <div>
            <div className={styles.thirddivtext}>{'₹'+val.points}</div>
            <div className={styles.thirddivtext1}>Rewards</div>
         </div>
        </div>
    </div>
    </div>

        </>
       })}
    


   

    </div>
    </>
  )
}

export default Figma1