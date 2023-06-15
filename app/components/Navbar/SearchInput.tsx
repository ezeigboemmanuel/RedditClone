import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import React from "react";

type SearchInputProps = {
  user?: User | null
};

const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <Flex flexGrow = {1} maxWidth={props.user ? 'auto' : '600px'} mr ={2} align = 'center'>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" mb = {1} />
        </InputLeftElement>
        <Input
          placeholder="Search Reddit"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover = {{
            bg: 'white',
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          _focus = {{
            outline: 'none',
            border: '0px solid',
            borderColor: 'blue.500'
          }}
          height = '34px'
          bg = 'gray.50'
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
