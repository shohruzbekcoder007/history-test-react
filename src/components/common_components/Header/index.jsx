import React, { useState } from 'react'
import { StyleHeader, StyledHeaderLeft, StyledHeaderRight } from './styles'
import Stack from '@mui/material/Stack'
import Language from '../Language'
import AccountMenu from '../AccountMenu'
import Badge from '../Badge'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import HeaderSarch from './HeaderSarch'
import ThemeMenu from '../ThemeMenu'

export default function Header() {

  const [open, setOpen] = useState(null)

  return (
    <StyleHeader>
      <HeaderSarch open={open} setOpen={() => {setOpen(false)}}/>
      <StyledHeaderLeft>
        <IconButton
          onClick={() => {setOpen(true)}}
          id="basic-button"
        >
          <SearchIcon/>
        </IconButton>
      </StyledHeaderLeft>
      <StyledHeaderRight>
        <Stack direction="row" spacing={1}>
          <ThemeMenu/>
          <Language/>
          <Badge/>
          <AccountMenu/>
        </Stack>
      </StyledHeaderRight>
    </StyleHeader>
  )
}
