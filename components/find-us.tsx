'use client'

import React from 'react'

const FindUs = () => {
  return (
    <section id="find-us" className="py-24 px-6 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Find Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <p className="text-lg mb-2">Kireka Shopping Center</p>
            <p className="text-lg mb-2">Kireka, Uganda</p>
            <p className="text-lg mb-6">
              We're conveniently located in the heart of Kireka, making it easy for job seekers and employers to connect with us.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-lg mb-2">Phone: +256 776998076</p>
            <p className="text-lg mb-2">Email: vamelconsultancygroup@gmail.com</p>
            <p className="text-lg">
              Feel free to reach out to us with any questions or to schedule an appointment.
            </p>
          </div>
          <div className="w-full h-[450px] border border-gray-300 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.745313320776!2d32.645919573965976!3d0.34661236398106604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db948a3fc10ab%3A0xa61368735eb67913!2sKireka%20Shopping%20Centre!5e0!3m2!1sen!2sug!4v1732869383014!5m2!1sen!2sug" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindUs

