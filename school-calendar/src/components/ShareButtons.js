'use client'

import { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterestP,
  faWhatsapp,
  faRedditAlien,
  faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function ShareButtons() {
  // Check if window is available
  const url = typeof window !== 'undefined' ? window.location.href : ''

  const openWindow = useCallback((shareUrl) => {
    window.open(shareUrl, 'newwindow', 'width=1000,height=500')
  }, [])

  const openFacebook = () => openWindow(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`)
  const openLinkedIn = () => openWindow(`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`)
  const openTwitter = () => openWindow(`https://twitter.com/share?url=${encodeURIComponent(url)}`)
  const openPinterest = () => openWindow(`http://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`)
  const openWhatsapp = () => openWindow(`https://wa.me/?text=${encodeURIComponent(url)}`)
  const openMessenger = () => openWindow(`fb-messenger://share/?link=${encodeURIComponent(url)}`)
  const openReddit = () => openWindow(`http://www.reddit.com/submit?url=${encodeURIComponent(url)}`)
  const openMail = () => openWindow(`mailto:?subject=I wanted you to see this site&body=Check out this site ${encodeURIComponent(url)}`)

  return (
    <div id="share-div" className="mb-4">
      <ul className="social-list list-inline mb-2 flex gap-4 justify-start text-xl">
        <li>
          <button onClick={openFacebook} aria-label="Share on Facebook" className="hover:text-blue-600">
            <FontAwesomeIcon icon={faFacebookF} />
          </button>
        </li>
        <li>
          <button onClick={openTwitter} aria-label="Share on Twitter" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
        </li>
        <li>
          <button onClick={openLinkedIn} aria-label="Share on LinkedIn" className="hover:text-blue-700">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </button>
        </li>
        <li>
          <button onClick={openPinterest} aria-label="Share on Pinterest" className="hover:text-red-600">
            <FontAwesomeIcon icon={faPinterestP} />
          </button>
        </li>
        <li>
          <button onClick={openWhatsapp} aria-label="Share on WhatsApp" className="hover:text-green-600">
            <FontAwesomeIcon icon={faWhatsapp} />
          </button>
        </li>
        <li>
          <button onClick={openReddit} aria-label="Share on Reddit" className="hover:text-orange-600">
            <FontAwesomeIcon icon={faRedditAlien} />
          </button>
        </li>
        <li>
          <button onClick={openMail} aria-label="Share by Email" className="hover:text-gray-700">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </li>
        <li>
          <button onClick={openMessenger} aria-label="Share on Messenger" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </button>
        </li>
      </ul>
    </div>
  )
}
