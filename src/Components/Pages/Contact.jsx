import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Contact = props => {
  return (
    <div className='contactContainer'>
      <div className='contactTitle'>
        Have a project or idea?
      </div>
      <div className='contactTitle'>
        Let's connect. 
      </div>
      
      <div className='contactName'>
        Scott Nassau
      </div>
      <div>
        <a href='mailto:snassau@gmail.com' className='contactEmail'>snassau@gmail.com</a>
      </div>
      <div>
        <a href='tel:310-993-7231' className='contactPhone'> 310-993-7231</a>
      </div>
      {/* <ListItem button key='Resume' onClick={(e)=>{props.drawerClick('resume'); handleDrawerClose();}}>
  <ListItemIcon> <GitHubIcon /> </ListItemIcon> <ListItemText primary='Resume' />
</ListItem> */}
    </div>
  )
}

export default Contact;

