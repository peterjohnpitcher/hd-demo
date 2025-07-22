'use client';

import { useEffect } from 'react';
import { loadAccessibilityPreferences, applyAccessibilityPreferences } from '@/lib/accessibility';

export default function AccessibilityStatement() {
  useEffect(() => {
    // Apply saved accessibility preferences on page load
    const prefs = loadAccessibilityPreferences();
    applyAccessibilityPreferences(prefs);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
        
        <section className="mb-8" aria-labelledby="commitment-heading">
          <h2 id="commitment-heading" className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
          <p className="text-gray-700 mb-4">
            Häagen-Dazs is committed to ensuring digital accessibility for people with disabilities. 
            We are continually improving the user experience for everyone and applying the relevant 
            accessibility standards.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="standards-heading">
          <h2 id="standards-heading" className="text-2xl font-semibold text-gray-900 mb-4">Conformance Status</h2>
          <p className="text-gray-700 mb-4">
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and 
            developers to improve accessibility for people with disabilities. It defines three levels 
            of conformance: Level A, Level AA, and Level AAA. This website is partially conformant 
            with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not 
            fully conform to the accessibility standard.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Features</h2>
          <p className="text-gray-700 mb-4">We have implemented the following features to improve accessibility:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2" role="list">
            <li>Skip navigation links to jump to main content</li>
            <li>ARIA labels and roles for all interactive elements</li>
            <li>Keyboard navigation support throughout the site</li>
            <li>Focus indicators with visible outlines</li>
            <li>High contrast mode option</li>
            <li>Reduced motion option for users who prefer less animation</li>
            <li>Large text option for improved readability</li>
            <li>Alt text for all informative images</li>
            <li>Proper heading hierarchy (h1-h6)</li>
            <li>Form labels and error messages</li>
            <li>Color contrast ratios meeting WCAG AA standards</li>
            <li>Responsive design that works on all devices</li>
          </ul>
        </section>

        <section className="mb-8" aria-labelledby="browser-heading">
          <h2 id="browser-heading" className="text-2xl font-semibold text-gray-900 mb-4">Browser and Assistive Technology Support</h2>
          <p className="text-gray-700 mb-4">
            This website is designed to be compatible with the following assistive technologies:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2" role="list">
            <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
            <li>Keyboard navigation</li>
            <li>Voice recognition software</li>
            <li>Operating system accessibility features</li>
          </ul>
        </section>

        <section className="mb-8" aria-labelledby="keyboard-heading">
          <h2 id="keyboard-heading" className="text-2xl font-semibold text-gray-900 mb-4">Keyboard Navigation</h2>
          <p className="text-gray-700 mb-4">This website can be navigated using a keyboard. Use the following keys:</p>
          <dl className="text-gray-700 space-y-2">
            <div className="flex">
              <dt className="font-semibold w-32">Tab:</dt>
              <dd>Navigate to the next interactive element</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">Shift + Tab:</dt>
              <dd>Navigate to the previous interactive element</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">Enter:</dt>
              <dd>Activate links and buttons</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">Space:</dt>
              <dd>Check/uncheck checkboxes, activate buttons</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">Arrow keys:</dt>
              <dd>Navigate within menus and lists</dd>
            </div>
            <div className="flex">
              <dt className="font-semibold w-32">Escape:</dt>
              <dd>Close modals and popups</dd>
            </div>
          </dl>
        </section>

        <section className="mb-8" aria-labelledby="known-issues-heading">
          <h2 id="known-issues-heading" className="text-2xl font-semibold text-gray-900 mb-4">Known Issues</h2>
          <p className="text-gray-700 mb-4">
            We are aware of the following accessibility issues and are working to address them:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2" role="list">
            <li>Some third-party embedded content may not be fully accessible</li>
            <li>PDF documents may not be optimized for screen readers</li>
            <li>Some older video content may lack captions</li>
          </ul>
        </section>

        <section className="mb-8" aria-labelledby="feedback-heading">
          <h2 id="feedback-heading" className="text-2xl font-semibold text-gray-900 mb-4">Feedback</h2>
          <p className="text-gray-700 mb-4">
            We welcome your feedback on the accessibility of the Häagen-Dazs website. 
            Please let us know if you encounter accessibility barriers:
          </p>
          <address className="not-italic text-gray-700">
            <p className="mb-2">
              <strong>Email:</strong> 
              <a href="mailto:accessibility@haagen-dazs.com" className="text-red-600 hover:text-red-700">
                accessibility@haagen-dazs.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> 
              <a href="tel:1-800-767-0120" className="text-red-600 hover:text-red-700">
                1-800-767-0120
              </a>
            </p>
            <p className="mb-2">
              <strong>Mail:</strong><br />
              Häagen-Dazs<br />
              Attn: Web Accessibility<br />
              P.O. Box 1234<br />
              Minneapolis, MN 55401
            </p>
          </address>
          <p className="text-gray-700 mt-4">
            We try to respond to feedback within 5 business days.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="evaluation-heading">
          <h2 id="evaluation-heading" className="text-2xl font-semibold text-gray-900 mb-4">Evaluation Methods</h2>
          <p className="text-gray-700 mb-4">
            Häagen-Dazs assessed the accessibility of this website by the following approaches:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2" role="list">
            <li>Self-evaluation using automated testing tools</li>
            <li>Manual testing with keyboard navigation</li>
            <li>Testing with screen readers</li>
            <li>Review by accessibility experts</li>
            <li>User testing with people with disabilities</li>
          </ul>
        </section>

        <section className="mb-8" aria-labelledby="date-heading">
          <h2 id="date-heading" className="text-2xl font-semibold text-gray-900 mb-4">Date</h2>
          <p className="text-gray-700">
            This statement was created on {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })} using the W3C Accessibility Statement Generator Tool.
          </p>
        </section>

        <div className="mt-12 p-6 bg-red-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-gray-700 mb-4">
            If you need assistance using our website or have questions about our accessibility features, 
            please don't hesitate to contact us. We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}