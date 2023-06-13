import { authModalState } from '@/app/atoms/authModalAtom';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import LogIn from './LogIn';

type AuthInputsProps = {
    
};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const modalState = useRecoilValue(authModalState)
    return (
        <Flex direction ='column' align='center' width='100%' mt={4}>
            {modalState.view === 'login' && <LogIn />}
            {/* {modalState.view === 'signup' && <SignUp />} */}
        </Flex>
    )
}
export default AuthInputs;