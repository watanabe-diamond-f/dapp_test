import { ChakraProvider, useDisclosure, extendTheme } from "@chakra-ui/react";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";

function App() {
  const breakpoints ={
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  };
  
const theme = extendTheme({
    breakpoints,
    fonts: {
        body: 'system-ui, sans-serif',
        heading: 'Georgia, serif',
        mono: 'Menlo, monospace',
    },
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
});

  // Pull the disclosure methods
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        // Our connect button will only handle opening
        <ConnectButton handleOpenModal={onOpen} />
        // Our Account modal will handle open state & closing
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;