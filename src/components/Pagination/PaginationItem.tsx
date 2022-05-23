import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean,
  pageNumber: string
}

export function PaginationItem({ isCurrent = false, pageNumber }: PaginationItemProps) {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="sx"
      width="4"
      colorScheme="pink"
      disabled
      _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
    >
      {pageNumber}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="sx"
      width="4"
      bg="gray.700"
      _hover={{ bg: 'gray.500' }}
      colorScheme=""
    >
      {pageNumber}
    </Button>
  )
}