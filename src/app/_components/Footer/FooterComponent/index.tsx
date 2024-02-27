'use client'
import React from 'react'
import { inclusion, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import classes from './index.module.scss'
import { Gutter } from '../../Gutter'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../../../../payload/payload-types'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusion.map((inclusion, index) => (
            <li key={inclusion.title}>
              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image src="/logo-white.png" alt="logo" width={170} height={50} />
            </Link>
            <p>{footer.copyright}</p>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}
export default FooterComponent
