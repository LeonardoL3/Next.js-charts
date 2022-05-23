import { Box, Flex, Divider, Heading, VStack, SimpleGrid, HStack, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type CreateUsersFormData = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}

const createUsersFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'no minímo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})


export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUsersFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUsersFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    console.log(values)
  }

  console.log(errors)


  return (
    <Box>
      <Header />
      <Flex width="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <Sidebar />

        <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius="8" bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal"> Criar usuário </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input error={errors.name} name="name" type="text" label="Nome completo" {...register('name')} />
              <Input error={errors.email} label="E-mail" name="email" type="email" {...register('email')} />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input error={errors.password} name="password" type="password" label="Senha" {...register('password')} />
              <Input error={errors.password_confirmation} type="password" name="password_confirmation" label="Confirmação da Senha" {...register('password_confirmation')} />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button isLoading={formState.isSubmitting} type="submit" colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}