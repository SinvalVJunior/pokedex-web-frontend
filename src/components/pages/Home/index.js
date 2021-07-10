import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../../../clients/backend';

export default function Home () {
    const [userInfo, setUserInfo] = useState('');
    const getInfo = async () => {
        const user = await getUserInfo();
        return user?.userInfo;
    }

    useEffect(() => {
        const getPageData = async () => {
            const info = await getInfo();
            setUserInfo(info);
        }
        getPageData();
    },[]);
    
    return <> { userInfo.name } </>;
}