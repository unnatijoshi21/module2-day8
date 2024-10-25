import React from 'react'
import Button from '@/components/Button'
import Image from 'next/image'

function contact() {
  return (
    <div>
      <h3> This is the Contact Page </h3>
      <Button bg_color='pink' f_color='white' title='contact'/>
      <Image src='https://www.bing.com/images/search?view=detailV2&ccid=Y09P%2b66N&id=B82655A1F92479548AAE2F9DC20F7EC9748F0A04&thid=OIP.Y09P-66N8Yn13Ra9-xsdVwHaEK&mediaurl=https%3a%2f%2fimages.hdqwalls.com%2fwallpapers%2focean-waves-at-sunset.jpg&exph=2160&expw=3840&q=ocean+photos&simid=608049430173417370&FORM=IRPRST&ck=C09B93EF699C05E0A5AC734F2BCFE388&selectedIndex=0&itb=0' width={50} height={50} alt='normal text'/>
    </div>
  )
}

export default contact