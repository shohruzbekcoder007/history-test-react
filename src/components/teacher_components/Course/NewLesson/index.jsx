import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import axios from '../../../../utils/baseUrl'
import { grouplesson } from '../../../../utils/API_urls'

export default function NewLesson({ open, handleClose, group_id, setCourse }) {

    const hendleClick = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        axios.post(
            grouplesson,
            {
                group_id: group_id,
                title: data.get('title'),
                description: data.get('description'),
            },
            {
                headers: {
                    "x-auth-token": sessionStorage.getItem("x-auth-token")
                }
            }
        )
            .then((response) => {
                sessionStorage.setItem('x-auth-token', response.headers['x-auth-token'])
                console.log(response.data)
                setCourse(response.data.update_group)
                handleClose()
            })
            .catch((error) => {
                console.log({ errorMessage: error.toString() });
                console.error("There was an error!", error);
            });
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <form onSubmit={hendleClick}>
                <DialogTitle>Yangi dars</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        name="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit'>Subscribe</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}