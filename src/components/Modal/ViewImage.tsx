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
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bgColor="pGray.800">
        <ModalBody p={0} maxH={600} maxW={900} w="max">
          <Image src={imgUrl} alt="Imagem selecionada" />
        </ModalBody>
        <ModalFooter justifyContent="flex-start" p="2">
          <Link href={imgUrl} target="_blank" fontSize="smaller">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
