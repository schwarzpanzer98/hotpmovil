import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Product from '../../assets/Icons/Product';
import styles from '../../styles/Accordion.module.css';
import Link from 'next/link';

export default function SimpleAccordion({ icon, title, items, showsidebar }) {
  return (

    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{icon}
            <span className={styles.spanText}>{title}</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              {items.map((item, index) => {
                return (
                  <Link href={item.path}>
                    <li key={index} onClick={showsidebar}>
                      {item.title}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}