import React, { CSSProperties, FC } from 'react';
import styles from './ResponseArea.module.scss'

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

export default React.memo(ResponseArea)