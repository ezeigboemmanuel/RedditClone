import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { auth } from "@/app/firebase/clientApp";

const OAuthButtons:React.FC = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    return (
        <Flex width = '100%' mb={4} direction='column'>
            <Button variant ='oauth' isLoading={loading} onClick={() => signInWithGoogle()}>
                <Image height='20px' mr={4} src = '/images/googlelogo.png'/>
                Continue with Google
            </Button>
            {error && <Text color='red' fontSize='10pt'>{error.message}</Text>}
        </Flex>
    )
}
export default OAuthButtons;