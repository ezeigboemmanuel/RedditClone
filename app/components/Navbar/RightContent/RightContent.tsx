import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';
import AuthModal from '../../Modal/Auth/AuthModal';
import { signOut } from 'firebase/auth';
import { auth } from '@/app/firebase/clientApp';

type RightContentProps = {
    user: any
};

const RightContent:React.FC<RightContentProps> = (props) => {
    
    return (
        <>
        <AuthModal />
        <Flex justify = 'center' align='center'>
            {props.user ? <Button onClick = {() => signOut(auth)}>Log out</Button> : <AuthButtons />}
        </Flex>
        </>
    )
}
export default RightContent;