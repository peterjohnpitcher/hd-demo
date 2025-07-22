'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { announceToScreenReader } from '@/lib/accessibility';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      announceToScreenReader('Please fix the errors in the form', 'assertive');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
      announceToScreenReader('Your message has been sent successfully!', 'polite');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-96 mb-12">
        <Image
          src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1920&h=600&fit=crop"
          alt="Customer service representative helping customer with a warm smile"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              We're here to help and answer any questions you might have
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              We'd love to hear from you! Whether you have a question about our products, 
              need assistance, or just want to share your Häagen-Dazs experience, we're here to help.
            </p>
            
            {/* Supporting Image */}
            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=600&h=400&fit=crop"
                alt="Friendly customer support team ready to assist"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Customer Service</h3>
                  <p className="text-gray-700">
                    <a href="tel:1-800-767-0120" className="text-haagen-burgundy hover:text-haagen-burgundy/80">
                      1-800-767-0120
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">Monday - Friday: 9 AM - 5 PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-700">
                    <a href="mailto:customer.service@haagen-dazs.com" className="text-haagen-burgundy hover:text-haagen-burgundy/80">
                      customer.service@haagen-dazs.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-haagen-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Mailing Address</h3>
                  <address className="not-italic text-gray-700">
                    Häagen-Dazs<br />
                    P.O. Box 1234<br />
                    Minneapolis, MN 55401
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <Image
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop"
                alt=""
                fill
                className="object-cover"
                aria-hidden="true"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send us a Message</h2>
            
            {submitSuccess && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md" role="alert">
                <p className="text-green-800">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="form-label required">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-haagen-burgundy focus:border-haagen-burgundy ${
                    errors.name ? 'field-error' : 'border-gray-300'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="error-message" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              
              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label required">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-haagen-burgundy focus:border-haagen-burgundy ${
                    errors.email ? 'field-error' : 'border-gray-300'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="error-message" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              
              {/* Phone Field (Optional) */}
              <div className="mb-4">
                <label htmlFor="phone" className="form-label">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-haagen-burgundy focus:border-haagen-burgundy"
                  aria-describedby="phone-hint"
                />
                <p id="phone-hint" className="text-sm text-gray-600 mt-1">
                  Include your phone number if you'd prefer a callback
                </p>
              </div>
              
              {/* Subject Field */}
              <div className="mb-4">
                <label htmlFor="subject" className="form-label required">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-haagen-burgundy focus:border-haagen-burgundy ${
                    errors.subject ? 'field-error' : 'border-gray-300'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="store-location">Store Location</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p id="subject-error" className="error-message" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>
              
              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="form-label required">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-haagen-burgundy focus:border-haagen-burgundy ${
                    errors.message ? 'field-error' : 'border-gray-300'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                />
                <p id="message-hint" className="text-sm text-gray-600 mt-1">
                  Minimum 10 characters
                </p>
                {errors.message && (
                  <p id="message-error" className="error-message" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 font-semibold rounded-lg transition-colors focus:ring-2 focus:ring-haagen-burgundy focus:ring-offset-2 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-haagen-burgundy text-white hover:bg-haagen-burgundy/90'
                }`}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="loading" aria-label="Sending message...">
                      Sending...
                    </span>
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
              
              <p className="text-sm text-gray-600 mt-4 text-center">
                <span aria-hidden="true">*</span> Required fields
              </p>
            </form>
            </div>
          </div>
        </div>
        
        {/* Footer Image Section */}
        <div className="mt-16 text-center">
          <div className="relative w-full max-w-2xl mx-auto h-64 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=400&fit=crop"
              alt="Happy team celebrating successful communication"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-8">
              <p className="text-white text-lg font-medium">
                We look forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}