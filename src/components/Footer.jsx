

function Footer() {
  return (
    <footer className="border-t-[10px] pt-2 mt-20 border-[#232323]">
      <div className="flex flex-col lg:px-60 md:px-20 px-10 py-2">
        <div className='text-[#ffffffb3] text-sm mb-8'>
          <ul className='flex lg:gap-x-96 md:gap-x-48  gap-x-36 gap-y-2 flex-wrap whitespace-nowrap'>
            <li className=' md:w-12'><p>Investor Relations</p></li>
            <li className=' md:w-12'><p>Legal Notices</p></li>
            <li className=' md:w-12'><p>Help Center</p></li>
            <li className=' md:w-12'><p>Jobs</p></li>
            <li className=' md:w-12'><p>Cookie Preferences</p></li>
            <li className=' md:w-12'><p>Gift Cards</p></li>
            <li className=' md:w-12'><p>Terms of Use</p></li>
            <li className=' md:w-12'><p>Corporate Information</p></li>
            <li className=' md:w-12'><p>Media Center</p></li>
            <li className=' md:w-12'><p>Privacy</p></li>
            <li className=' md:w-12'><p>Contact Us</p></li>
          </ul>
        </div>
        <div>
          <select id="countries" className="bg-gray-900 text-[#ffffffb3] text-sm rounded-lg block p-2 mb-3">
            <option >English</option>
            <option >Azərbaycan</option>
            <option >Русский</option>
          </select>
        </div>
        <div className='text-[#ffffffb3]'>
          <p>© 1997-2023 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
