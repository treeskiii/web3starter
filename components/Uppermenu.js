import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Uppermenu = () => {
  return (
<div class="class= z-50 top-0 left-0 w-full bg-gray-800 h-16 flex items-center px-4  gap-3 md:gap-4 justify-between md:justify-end absolute  tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
  <a aria-current="page" class="py-2 md:hidden flex-1 active  tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center" href="/portfolios">
    <img src="./assets/imgs/wayfinder3d.png " class="w-full max-w-[11rem] md:mx-auto"/>
  </a>
  <button type="button" class="md:hidden text-darkblue ">
    <svg viewBox="0 0 18 25" fill="none" class="h-6 fill-current ">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 10.53a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm6-4.5a6 6 0 11-12 0 6 6 0 0112 0zM1.52 22.53h14.96a7.51 7.51 0 00-14.96 0zM9 14.03c-4.97 0-9 4.03-9 9a1 1 0 001 1h16a1 1 0 001-1 9 9 0 00-9-9z">
      </path>
    </svg>
  </button>
  <ConnectButton />
  <div class="cursor-pointer w-10 h-10 flex items-center justify-center md:hidden">
    <svg viewBox="0 0 24 24" fill="none" class="block md:hidden fill-current text-darkblue w-6 h-6 ">
      <rect y="3.94" width="24" height="1.5" rx=".75" fill="#0A0A32">
      </rect>
      <rect y="10.98" width="24" height="1.5" rx=".75" fill="#0A0A32">
      </rect>
      <rect y="18.56" width="18" height="1.5" rx=".75" fill="#0A0A32">
      </rect>
    </svg>
  </div>
</div>


  )
}

export default Uppermenu