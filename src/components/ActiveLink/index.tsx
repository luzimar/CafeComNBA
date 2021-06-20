import { useRouter } from 'next/dist/client/router'
import Link, { LinkProps } from 'next/link'
import { cloneElement } from 'react'
import { ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string;
} 

export function ActiveLink( { children, activeClassName, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter()
    const className = asPath === rest.href ? activeClassName : '';

    return (
        <Link {...rest}>
            { cloneElement(children, {
                className,
            })}
        </Link>
    )
}