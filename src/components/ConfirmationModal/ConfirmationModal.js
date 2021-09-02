import React from 'react';
import { Modal, Paper, Button } from '@material-ui/core';
import { useStyles } from './ConfirmationModal.styles';
import { CgPokemon }  from 'react-icons/cg';


const ConfirmationModal = ({ message, open, confirmButtonLabel, title, hasImage, handleConfirm }) => {

    const classes = useStyles();

    return (
        <Modal open={open}>
            <Paper className={classes.modalPaper}>
                <div className={classes.pokeLogo}>
                    <CgPokemon size={150} style={{color: '##fbc02d'}}/>
                </div>
                <div className={classes.titleContainer}>
                    {title}
                </div>
                <div>
                    {message} 
                    <Button variant='contained' onClick={handleConfirm} classes={{
                            root: classes.confirmButton,
                            label: classes.buttonLabel,
                        }} type="submit">
                            {confirmButtonLabel ? confirmButtonLabel : "Confirm"}
                    </Button>
                </div>
            </Paper>
        </Modal>
    );
}

export default ConfirmationModal;