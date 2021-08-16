import React, { useEffect, useState } from 'react';
import { useHomeState } from '../pages/Home/home.context';
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
import { useStyles } from './Loading.styles';

const override = css`
  display: inline;
  opacity: 100%;
`;

const Loading = () => {

    const [loading, setLoading] = useState(false);

    const state = useHomeState();
    const classes = useStyles();

    useEffect(() => {
        setLoading(state?.loading);
    }, [state?.loading])

    return (
        <>
        {loading && (
            <>
                <div className={classes.root} >
                </div>
                <div className={classes.loading} >
                    <div className={classes.centralizeAbsoluteElement}>
                        Loading<PulseLoader loading={true} color="#f44336" css={override} size={10} />
                    </div>
                </div>
            </>
        )
        }
        </>
    );
}

export default Loading;