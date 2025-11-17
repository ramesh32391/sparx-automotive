import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    formDataToSend.append('form-name', 'contact');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('service', formData.service);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: '',
        });
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Background */}
      <section className="relative bg-cover bg-center py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1920&q=80)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/90 to-blue-primary/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Schedule a service appointment or inquire about our used cars
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="bg-gradient-to-r from-blue-primary to-blue-600 text-white rounded-t-xl -mt-8 -mx-8 mb-8 p-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <MessageSquare className="w-8 h-8" />
                  Send us a Message
                </h2>
              </div>

              {/* NETLIFY FORM START */}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden field for Netlify */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human:{' '}
                    <input name="bot-field" />
                  </label>
                </p>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Thank you for your inquiry!</p>
                      <p className="text-sm">We will contact you soon.</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
                    <p className="font-semibold">Oops! Something went wrong.</p>
                    <p className="text-sm">Please try again or call us directly at (903) 816-8330</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-primary focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-primary focus:outline-none transition-colors"
                    placeholder="(903) 816-8330"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-primary focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                    Service Needed / Car Inquiry *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="oil-change">Oil Change</option>
                    <option value="wheel-alignment">Wheel Alignment</option>
                    <option value="auto-repair">Auto Repair & Diagnostics</option>
                    <option value="tire-rotation">Tire Rotation</option>
                    <option value="brake-service">Brake Service</option>
                    <option value="car-inspection">Full Car Inspection</option>
                    <option value="car-inquiry">Used Car Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-orange-primary focus:outline-none transition-colors"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-modern btn-gradient btn-glow btn-shimmer w-full text-white py-4 rounded-xl text-xl font-bold shadow-lg hover:shadow-xl relative z-10 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  <Send className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </span>
                </button>
              </form>
              {/* NETLIFY FORM END */}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-blue-primary mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-primary/10 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-blue-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-primary mb-2">Address</h3>
                    <p className="text-gray-700">1504 W Houston St</p>
                    <p className="text-gray-700">Sherman, TX 75092</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-primary/10 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-orange-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-primary mb-2">Phone</h3>
                    <a
                      href="tel:+19038168330"
                      className="text-gray-700 hover:text-orange-primary transition-colors text-lg font-semibold"
                    >
                      (903) 816-8330
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/10 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-primary mb-2">Email</h3>
                    <a
                      href="mailto:info@sparxautomotives.com"
                      className="text-gray-700 hover:text-orange-primary transition-colors text-lg font-semibold"
                    >
                      info@sparxautomotives.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 rounded-lg p-3">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-primary mb-3">Business Hours</h3>
                    <div className="space-y-1 text-gray-700">
                      <p>Sunday: <span className="font-semibold text-gray-900">Closed</span></p>
                      <p>Monday: <span className="font-semibold text-gray-900">8 AM–6 PM</span></p>
                      <p>Tuesday: <span className="font-semibold text-gray-900">8 AM–6 PM</span></p>
                      <p>Wednesday: <span className="font-semibold text-gray-900">8 AM–6 PM</span></p>
                      <p>Thursday: <span className="font-semibold text-gray-900">8 AM–6 PM</span></p>
                      <p>Friday: <span className="font-semibold text-gray-900">8 AM–6 PM</span></p>
                      <p>Saturday: <span className="font-semibold text-gray-900">8 AM–6 PM</span></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
