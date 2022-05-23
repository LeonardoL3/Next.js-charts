import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode,
}

type SidebarDrawerContextDataProps = UseDisclosureReturn

const SidebarDrawerContent = createContext({} as SidebarDrawerContextDataProps)

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps){
  const router = useRouter()
  const disclosure = useDisclosure()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContent.Provider value={disclosure}>
      {children}
    </SidebarDrawerContent.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContent)