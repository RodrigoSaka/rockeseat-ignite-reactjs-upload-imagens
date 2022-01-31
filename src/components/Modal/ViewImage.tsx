import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent
        w="auto"
        h="auto"
        maxW={['360px', '630px', '900px']}
        maxH={['240px', '420px', '600px']}
        background="transparent"
      >
        <ModalBody p="0">
          <Image src={imgUrl} h="auto" w="auto" />
        </ModalBody>
        <ModalFooter
          bg="pGray.800"
          h="2rem"
          justifyContent="left"
          borderRadius="0px 0px 6px 6px"
        >
          <Link href={imgUrl} isExternal fontSize=".875rem" outline="none">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
