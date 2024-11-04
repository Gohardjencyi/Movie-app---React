
const Footer = () => {  
  return (  
    <footer className="py-10">  
      <div className="container-fluid mx-auto px-6">  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">  
          <div>  
            <h5 className="font-bold mb-2">Solutions</h5>  
            <ul>  
              <li>Marketing</li>  
              <li>Analytics</li>  
              <li>Commerce</li>  
              <li>Insights</li>  
            </ul>  
          </div>  
          <div>  
            <h5 className="font-bold mb-2">Support</h5>  
            <ul>  
              <li>Pricing</li>  
              <li>Documentation</li>  
              <li>Guides</li>  
              <li>API Status</li>  
            </ul>  
          </div>  
          <div>  
            <h5 className="font-bold mb-2">Company</h5>  
            <ul>  
              <li>About</li>  
              <li>Blog</li>  
              <li>Jobs</li>  
              <li>Press</li>  
              <li>Partners</li>  
            </ul>  
          </div>  
          <div className="">  
          <h5 className="font-bold mb-2">Subscribe to our newsletter</h5>  
          <p className="mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>  
          <div className="flex flex-col md:flex-row md:items-center">  
            <input  
              type="email"  
              placeholder="Enter your email"  
              className="p-2 rounded-md mb-2 md:mb-0 md:mr-2"  
            />  
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">  
              Subscribe  
            </button>  
          </div>  
        </div>  
        </div>  

       
        <div className='border-t border-gray-700 justify-between mt-5 lg:flex'>
            <div className="mt-4 text-center">  
                    <p>© 2020 Your Company, Inc. All rights reserved.</p>  
                    </div>  

                    <div className="flex justify-center space-x-4 mt-4">  
                    <a href="#" className="text-gray-400 hover:text-white">Facebook</a>  
                    <a href="#" className="text-gray-400 hover:text-white">Instagram</a>  
                    <a href="#" className="text-gray-400 hover:text-white">Twitter</a>  
                    <a href="#" className="text-gray-400 hover:text-white">YouTube</a>  
                    </div>  
                </div>  
            </div>
            
    </footer>  
  );  
};  

export default Footer;