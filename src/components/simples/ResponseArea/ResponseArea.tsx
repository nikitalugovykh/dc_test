import React, { CSSProperties, FC } from 'react';
import styles from './ResponseArea.module.scss'

// const ResponseArea = styled.div`
//     margin-top: 5px;
//     padding: 10px;
//     background: rgba(118, 118, 128, 0.24);
//     border-radius: 10px;
//     width: 343px;
//     min-height: 120px;
// `
// const Span = styled.span`
//     color: rgba(235, 235, 245, 0.6);
//     margin-left: 10px;
//     font-size: 13px;
//     font-weight: bold;
//     letter-spacing: -0.408px;
// `
// const Paragraph = styled.p`
//     color: #fff;

// `
// const ResponseWrapper = styled.div`
//     margin-top: 23px;
// `

type Props = {
    title: string
    data: string
    classes?: {
        root?: CSSProperties
    }
}

const ResponseArea: FC<Props> = ({data, title, classes}) => {
    return ( 
       <div style={classes?.root}>
           <span className= {styles.label}>{title}</span>
           <div className = {styles.contentWrapper}>
               <p className={styles.text}>{data}</p>
           </div>
       </div>
        
     );
}

export default ResponseArea;