import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";

type Props = {
    handleOpenModal: any;
}

export default function ConnectButton({ handleOpenModal }: Props) {
    // userDappのactivateBrowserWalletを呼び出す
    const { activateBrowserWallet, account } = useEthers()
    // etherBalanceはオブジェクトになるので、文字列化
    const etherBalance = useEtherBalance(account)

    function handleConnectWallet() {
      activateBrowserWallet();
    }
  
    return account ? (
        <Button
        // モーダルを開く処理に名前付き関数を追加
        onClick={handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
        >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    ) : (
      <Button onClick={handleConnectWallet}>Connect to a wallet</Button>
    );
  }