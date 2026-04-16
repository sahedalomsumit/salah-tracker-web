import { useEffect } from 'react'

export function useSEO({ title, description, canonical }) {
  useEffect(() => {
    // 1. Update Title Tag
    const baseTitle = 'Sahed Alom Sumit'
    const fullTitle = title ? `${title} | ${baseTitle}` : `${baseTitle} | Web Designer & Developer`
    document.title = fullTitle

    // 2. Prepare Defaults
    const defaultDescription = "Sahed Alom Sumit is a Web Designer & Developer based in Helsinki, Finland. I build websites that feel alive — where good design meets clean code."
    const activeDescription = description || defaultDescription

    // 3. Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', activeDescription)

    // 4. Update OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', fullTitle)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', activeDescription)

    // 5. Update Twitter Tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) twitterTitle.setAttribute('content', fullTitle)

    const twitterDesc = document.querySelector('meta[name="twitter:description"]')
    if (twitterDesc) twitterDesc.setAttribute('content', activeDescription)

    // 6. Update Canonical Link
    const canonicalEl = document.querySelector('link[rel="canonical"]')
    if (canonicalEl) {
      const fullCanonical = canonical ? `https://sahedalomsumit.com${canonical.startsWith('/') ? '' : '/'}${canonical}` : 'https://sahedalomsumit.com/'
      canonicalEl.setAttribute('href', fullCanonical)
    }

    // Cleanup — optionally restore some defaults on unmount
    return () => {
      // We don't necessarily want to flicker back to home title while transitioning
      // but we can if the next page doesn't have useSEO (though they all should now)
    }
  }, [title, description, canonical])
}
