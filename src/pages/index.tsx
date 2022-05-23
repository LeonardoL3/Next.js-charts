import { Flex, Button, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

type HandleSignInProps = {
  email: string,
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<HandleSignInProps> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }
  console.log(errors)

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        bg="gray.800"
        p="8"
        borderRadius="8px"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input error={errors.email} label="E-mail" name="email" type="email" {...register('email')} />
          <Input error={errors.password} label="Password" name="password" type="password" {...register('password')} />
        </Stack>

        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          marginTop='6'
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
