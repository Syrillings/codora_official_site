import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-orange-400 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy for Codora</h1>
          <p className="text-muted-foreground mb-8">Last updated: September 19, 2025</p>
          
          <section className="mb-8">
            <p>
              At Codora, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our mobile application ("App"). Please 
              read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
              please do not access the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect several different types of information for various purposes to provide and improve our App to you.</p>
            
            <h3 className="text-xl font-medium mb-2">Personal Data</h3>
            <p className="mb-4">
              While using our App, we may ask you to provide us with certain personally identifiable information 
              that can be used to contact or identify you ("Personal Data"). We may also automatically collect certain 
              information to help us deliver over-the-air (OTA) updates and improve app performance. Personally 
              identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Usage data</li>
              <li>Device information</li>
              <li>Microphone access (optional, for future features)</li>
            </ul>

            <h3 className="text-xl font-medium mb-2 mt-6">Microphone Access</h3>
            <p className="mb-4">
              Our app may request microphone access to enable future voice-related features. We want to assure you that:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Microphone access is completely optional</li>
                <li>We do not collect, store, or transmit any audio data without your explicit permission</li>
                <li>Any future features using the microphone will process audio locally on your device</li>
                <li>You can deny or revoke microphone access at any time in your device settings</li>
              </ul>
            </p>

            <h3 className="text-xl font-medium mb-2 mt-6">Usage Data</h3>
            <p>
              We may also collect information that your device sends whenever you use our App ("Usage Data"). 
              This Usage Data may include information such as your device's Internet Protocol address (e.g., IP address), 
              device name, operating system version, the configuration of the app when utilizing our Service, 
              the time and date of your use of the Service, and other statistics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>We use the collected data for various purposes:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>To provide and maintain our App, including delivering over-the-air (OTA) updates</li>
              <li>To notify you about changes to our App, including important updates or security patches</li>
              <li>To allow you to participate in interactive features of our App when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our App</li>
              <li>To monitor the usage of our App</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over 
              the Internet or method of electronic storage is 100% secure. While we strive to use commercially 
              acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Service Providers</h2>
            <p className="mb-4">
              We may employ third-party companies and individuals to facilitate our App ("Service Providers"), 
              to provide the App on our behalf, to perform App-related services, or to assist us in analyzing 
              how our App is used.
            </p>
            <p>
              These third parties have access to your Personal Data only to perform these tasks on our behalf 
              and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Links to Other Sites</h2>
            <p>
              Our App may contain links to other sites that are not operated by us. If you click on a third-party 
              link, you will be directed to that third party's site. We strongly advise you to review the 
              Privacy Policy of every site you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Age Restrictions</h2>
            <p className="mb-4">
              Our App is designed to be accessible to users of all ages. However, we recommend that users 
              under the age of 13 use the App with parental guidance. We do not knowingly collect personal 
              information from children under 13 without parental consent.
            </p>
            <p>
              If you are a parent or guardian and you are aware that your child has provided us with Personal 
              Data without your consent, please contact us so we can take necessary actions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Over-the-Air (OTA) Updates</h2>
            <p className="mb-4">
              Our App uses over-the-air (OTA) update functionality to ensure you always have the latest features 
              and security improvements. When you use our App, it may automatically check for and download 
              updates in the background. These updates may include bug fixes, performance improvements, and 
              new features. You may be notified when an update is available, and in some cases, certain 
              updates may be required to continue using the App.
            </p>
            <p className="mb-6">
              OTA updates may require certain permissions and may collect information about your device 
              (such as device model, operating system version, and app version) to ensure compatibility 
              and proper installation of updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date at the top of this 
              Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this 
              Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> codora.xyz@proton.me
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
