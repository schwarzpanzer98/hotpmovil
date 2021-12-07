import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from '../../styles/Accordion.module.css';
import Link from 'next/link';

export default function SimpleAccordion({ icon, title, items, showsidebar }) {
  return (

    <div className={styles.mainContainer}>
      <Accordion className={styles.MuiAccordionRoot}>
        <AccordionSummary
          className={styles.MuiAccordionSummaryExpandIconWrapper}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.MuiTypographyRoot}>{icon}
            <span className={styles.spanText}>{title}</span></Typography>
        </AccordionSummary>
        <AccordionDetails>

          {items.map((item, index) => {
            return (
              <ul className={styles.list} key={index}>
                <li onClick={showsidebar} >
                  <Typography>
                    <Link href={item.path} >
                      {item.title}
                    </Link>
                  </Typography>
                </li>
              </ul>

            )
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}