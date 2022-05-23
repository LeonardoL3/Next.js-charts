import { cloneElement, ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement,
  shouldMatchExactHref?: boolean
}

export function Activelink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()
  let isActive = false

  if (shouldMatchExactHref && asPath === rest.href) isActive = true
  if (!shouldMatchExactHref && asPath.startsWith(String(rest.href))) isActive = true
      

    return (
      <Link {...rest}>
        {cloneElement(children, { color: isActive ? 'pink.400' : 'gray.50' })}
      </Link>
    )
}