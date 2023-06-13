import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';


const OAuthButtons:React.FC = () => {
    
    return (
        <Flex width = '100%' mb={4} direction='column'>
            <Button variant ='oauth'>
                <Image height='20px' mr={4} src = '/images/googlelogo.png'/>
                Continue with Google
            </Button>
        </Flex>
    )
}
export default OAuthButtons;