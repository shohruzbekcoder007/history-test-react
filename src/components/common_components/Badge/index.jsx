import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';

export default function SimpleBadge() {
  return (
      <IconButton>
        <Badge badgeContent={4} color="primary">
            <MailIcon color="action" />
        </Badge>
      </IconButton>
    
  );
}
