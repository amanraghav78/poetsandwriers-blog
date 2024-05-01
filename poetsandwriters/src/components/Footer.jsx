import { Footer } from 'flowbite-react'
import React from 'react'
import { BsFacebook , BsInstagram, BsTwitter, BsGithub, BsDribbble, BsGit} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
            <Link
        to='/'
        className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Sahand's
        </span>
        Blog
      </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title='About'/>
                <Footer.LinkGroup col>
                    <Footer.link
                        href= 'https:www.100jsprojects.com'
                        target= '_blank'
                        rel= 'noopener noreferrer'
                    >
                        100 JS projects
                    </Footer.link>
                    <Footer.link
                        href= '/about'
                        target= '_blank'
                        rel= 'noopener noreferrer'
                    >
                        Poetsandwriters's blog
                    </Footer.link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title='Follow us'/>
                <Footer.LinkGroup col>
                    <Footer.link
                        href= 'https:www.github.com/amanraghav78'
                        target= '_blank'
                        rel= 'noopener noreferrer'
                    >
                        Github
                    </Footer.link>
                    <Footer.link
                        href= 'https:instagram.com/poetsandwriters'
                        target= '_blank'
                        rel= 'noopener noreferrer'
                    >
                        Insta
                    </Footer.link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title='Legal'/>
                <Footer.LinkGroup col>
                    <Footer.link
                        href= '#'
                        
                    >
                        Privacy
                    </Footer.link>
                    <Footer.link
                        href= 'https:instagram.com/poetsandwriters'
                        target= '_blank'
                        rel= 'noopener noreferrer'
                    >
                        Terms and Conditions
                    </Footer.link>
                </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href= '#' by= "poetsanwriter's blog" year= {new Date().getFullYear()}/>
            <div className="felx gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href='#' icon= {BsFacebook}/>
                <Footer.Icon href='#' icon= {BsInstagram}/>
                <Footer.Icon href='#' icon= {BsTwitter}/>
                <Footer.Icon href='#' icon= {BsGithub}/>
                <Footer.Icon href='#' icon= {BsDribbble}/>
            </div>
        </div>
      </div>
    </Footer>
  )
}
