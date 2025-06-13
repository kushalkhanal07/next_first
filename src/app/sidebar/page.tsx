"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Sidebar() {
  const [hidden, setHidden] = useState(false)
  const [sidebar, setSidebar] = useState([
    {
      parent: "sidebar1",
      children: [
        { child: "version1" },
        { child: "version2" },
        { child: "version3" },
        { child: "version4" },
        { child: "version5" }
      ]
    },
    {
      parent: "sidebar2",
      children: [
        { child: "version1" },
        { child: "version2" },
        { child: "version3" },
        { child: "version4" },
        { child: "version5" }
      ]
    },
    {
      parent: "sidebar3",
      children: [
        { child: "version1" },
        { child: "version2" },
        { child: "version3" },
        { child: "version4" },
        { child: "version5" }
      ]
    },
    {
      parent: "sidebar4",
      children: [
        { child: "version1" },
        { child: "version2" },
        { child: "version3" },
        { child: "version4" },
        { child: "version5" }
      ]
    },
    {
      parent: "sidebar3",
      children: null
    }
  ])

  const [show, setShow] = useState<number>(0)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setHidden(true)  // hide sidebar
      } else {
        setHidden(false) // show sidebar
      }
    }

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <aside
      className={`w-60 h-full  fixed  transition-all duration-500 ease-in-out 
      ${hidden ? "-left-72" : "left-0"} overflow-y-auto `}
    >
      <div className=' mx-5 mt-10'>
        {
          sidebar.map((bar, idx) => {
            return <div key={idx} className=' my-4'>
              {bar.children ? <p onClick={() => { setShow(idx) }}>{bar.parent}</p> : <Link href={"/contact"} >{bar.parent}</Link>}
              {idx == show && <ul>
                {bar?.children?.map(({ child }, idx) => {
                  return <React.Fragment key={idx}>
                    <li className='hover:bg-yellow-500 rounded-sm my-2 px-2 py-1 ml-2'>{child}</li>
                  </React.Fragment>
                })}
              </ul>}
            </div>
          })
        }
      </div>
    </aside>
  )
}
