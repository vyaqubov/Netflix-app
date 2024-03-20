import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function FrequrntlyItem({ obj }) {
    const [open, setOpen] = useState(true);

    function change() {
        open ? setOpen(false) : setOpen(true);
    }
    return (
        <>
            <Accordion className='frequently' onClick={change}>
                <AccordionSummary
                    expandIcon={open ? <AiOutlinePlus className='frequently-icon' /> : <AiOutlineClose className='frequently-icon' />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{obj.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {obj.desc}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default FrequrntlyItem