import React from 'react'
import { StyleHeaderSarch, StyleHeaderSarchContainer, StyleSerchInput } from './styles'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles';

const SerchInput = styled(StyleSerchInput)(({ theme }) => ({
  color: theme.palette.mode === "dark"?"#fff":"#000",
  
}));

export default function HeaderSarch({open, setOpen}) {

  return (
    <StyleHeaderSarch
        elevation={6}
        square
        className={open===true?'open-search':open===null?'':'close-search'}
    >
      <StyleHeaderSarchContainer>
          <div>
            <SearchIcon/>
            <SerchInput placeholder='Search'/>
          </div>
        <Button
          variant="contained"
          sx={{
            borderRadius: 8,
            textTransform: "capitalize",
            fontWeight: "bold"
          }}
          onClick={() => {setOpen()}}
        >
          Search
        </Button>
      </StyleHeaderSarchContainer>
    </StyleHeaderSarch>
  )
}
