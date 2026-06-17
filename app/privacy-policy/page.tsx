import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";

const tocItems = [
  { id: "introduction", label: "Introduction" },
  { id: "interpretation-and-definitions", label: "Interpretation and Definitions" },
  { id: "collecting-and-using-personal-data", label: "Collecting and Using Your Personal Data" },
  { id: "usage-data", label: "Usage Data" },
  { id: "information-collected-while-using-application", label: "Information Collected While Using the Application" },
  { id: "use-of-your-personal-data", label: "Use of Your Personal Data" },
  { id: "sharing-of-your-personal-data", label: "Sharing of Your Personal Data" },
  { id: "payment-security", label: "Payment Security" },
  { id: "retention-of-your-personal-data", label: "Retention of Your Personal Data" },
  { id: "user-rights-and-data-deletion", label: "User Rights and Data Deletion" },
  { id: "transfer-of-your-personal-data", label: "Transfer of Your Personal Data" },
  { id: "disclosure-of-your-personal-data", label: "Disclosure of Your Personal Data" },
  { id: "other-legal-requirements", label: "Other Legal Requirements" },
  { id: "security-of-your-personal-data", label: "Security of Your Personal Data" },
  { id: "detailed-information-on-processing", label: "Detailed Information on Processing" },
  { id: "analytics", label: "Analytics" },
  { id: "email-marketing-and-communications", label: "Email Marketing and Communications" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "links-to-third-party-websites", label: "Links to Third-Party Websites" },
  { id: "governing-law-and-jurisdiction", label: "Governing Law and Jurisdiction" },
  { id: "changes-to-this-privacy-policy", label: "Changes to This Privacy Policy" },
  { id: "contact-us", label: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF3E0" }}>
      <ScrollToTop />
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <article className="rounded-2xl border border-[#DC262620] bg-white/85 p-6 sm:p-10 md:p-12 shadow-sm">
          <header className="pb-8 border-b border-black/10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600">Last Updated: March 24, 2026</p>
          </header>

          <nav aria-label="Table of contents" className="mt-8 rounded-xl border border-black/10 bg-[#FFF8F0] p-4 sm:p-6">
            <h2 className="text-base font-semibold text-gray-900">Table of Contents</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-red-700 hover:text-red-800 hover:underline underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section id="introduction" className="pt-10 pb-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">Introduction</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                This Privacy Policy constitutes a legally binding agreement between you ("User", "you", or "your") and SevaLink Technology Pvt Ltd ("Company", "we", "our", or "us") and governs the collection, use, processing, storage, and disclosure of your information when you access or use our platform and services, including but not limited to ambulance booking, telemedicine, homecare services, and appointment scheduling.
              </p>
              <p>
                By accessing, registering with, or using the Service in any manner, you expressly acknowledge, agree, and consent to the collection, use, disclosure, and processing of your information in accordance with this Privacy Policy and applicable laws. If you do not agree with any part of this Privacy Policy, you must immediately discontinue use of the Service.
              </p>
              <p>
                We may collect personal, sensitive, and technical information to operate, maintain, improve, and enhance our services, ensure regulatory compliance, prevent fraud or misuse, and facilitate efficient healthcare service delivery. You acknowledge and agree that such data may be shared with third-party service providers, healthcare professionals, partners, or authorities where necessary to provide the Service or comply with legal obligations.
              </p>
              <p>
                While SevaLink implements reasonable security measures to protect your data, you understand and accept that no method of transmission over the internet or electronic storage is completely secure, and we do not guarantee absolute security of your information.
              </p>
              <p>
                By continuing to use the Service, you represent that you have read, understood, and agreed to be bound by this Privacy Policy.
              </p>
            </div>
          </section>

          <section id="interpretation-and-definitions" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">1. Interpretation and Definitions</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">1.1 Interpretation</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              In this Privacy Policy of SevaLink, words with the initial letter capitalized have meanings defined under the conditions set forth below. These definitions shall apply consistently regardless of whether such terms appear in singular or plural form, and shall be interpreted in a manner consistent with the context of SevaLink's services, including but not limited to ambulance booking, telemedicine, homecare, and appointment scheduling.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">1.2 Definitions</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">For the purposes of this Privacy Policy:</p>
            <ul className="mt-4 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>"Account" means a unique account created for You to access and use SevaLink's Service or specific features of the Service.</li>
              <li>"Application" means the SevaLink mobile or web application provided by the Company, accessible on any electronic device.</li>
              <li>"Company" (referred to as either "the Company", "We", "Us" or "Our") refers to SevaLink Technology Pvt Ltd, including its owners, operators, affiliates, and authorized representatives.</li>
              <li>"Country" refers to India, and includes any other jurisdictions where SevaLink's services may be available.</li>
              <li>"Cookies" are small files placed on Your device (computer, mobile, or tablet) that store details of Your browsing activity and preferences to enhance functionality and user experience.</li>
              <li>"Device" means any device capable of accessing the Service, including but not limited to a computer, smartphone, or tablet.</li>
              <li>"Personal Data" means any information that relates to an identified or identifiable individual, including but not limited to name, contact details, location data, and, where applicable, health-related information.</li>
              <li>"Service" refers to the SevaLink platform, including its website, mobile application, and all related services such as ambulance booking, telemedicine, homecare services, and appointment scheduling.</li>
              <li>"Service Provider" means any natural or legal person who processes data on behalf of the Company, including third-party vendors, healthcare professionals, hospitals, diagnostic centers, ambulance partners, and technology providers engaged to facilitate or support the Service.</li>
              <li>"Usage Data" refers to data collected automatically through the use of the Service or its infrastructure, such as IP address, device type, browser type, pages visited, time spent, and interaction details.</li>
              <li>"Healthcare Provider" means any licensed or authorized medical professional, hospital, clinic, diagnostic center, nurse, paramedic, or other healthcare entity registered on or partnered with SevaLink to provide services through the Platform.</li>
              <li>"Emergency Services" means services requested in urgent or critical situations requiring immediate medical attention, including but not limited to ambulance dispatch and emergency response coordination facilitated through SevaLink.</li>
              <li>"Teleconsultation" means the provision of medical consultation, advice, or guidance by a Healthcare Provider to a User through digital or remote communication channels such as audio, video, chat, or other online means available on the platform.</li>
              <li>"You" means the individual accessing or using the Service, or any legal entity on behalf of which such individual is accessing or using the Service, including patients, caregivers, or authorized representatives.</li>
            </ul>
            <p className="mt-5 text-gray-700 leading-8 text-[15px] sm:text-base">
              Note: SevaLink operates solely as a technology platform that facilitates connections between Users and Healthcare Providers. SevaLink does not provide medical advice, diagnosis, or treatment and shall not be held responsible for any medical decisions, outcomes, or services provided by Healthcare Providers or third parties.
            </p>
          </section>

          <section id="collecting-and-using-personal-data" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">2. Collecting and Using Your Personal Data</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">2.1 Personal Data</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              While accessing or using SevaLink's Service, we may collect, store, and process certain personally identifiable information ("Personal Data") that can be used to identify you, contact you, or facilitate the provision of healthcare-related services. Such data is collected for purposes including but not limited to service delivery, identity verification, communication, operational management, personalization, safety, fraud prevention, and compliance with applicable laws and regulations.
            </p>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">The categories of Personal Data that may be collected include, but are not limited to:</p>
            <ul className="mt-4 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Identity Information: First name, last name, age, gender, and other identifying details</li>
              <li>Contact Information: Email address, phone number, and communication details</li>
              <li>Location Information: Residential address and real-time location data for service coordination, including ambulance dispatch and homecare services</li>
              <li>Health Information: Medical history, symptoms, prescriptions, reports, consultation details, and any other health-related data voluntarily provided by you in connection with teleconsultation, homecare, or other healthcare services</li>
              <li>Account Information: Login credentials, profile details, preferences, and account activity</li>
              <li>Transaction Information: Payment details, billing address, transaction history, and subscription-related information (if applicable)</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              By providing such Personal Data, you expressly consent to its collection, storage, use, processing, and disclosure by SevaLink in accordance with this Privacy Policy. You further acknowledge that certain data, including health-related information, may be considered sensitive personal data under applicable laws and may be shared with Healthcare Providers, partners, and authorized third parties strictly for the purpose of delivering services.
            </p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              SevaLink implements reasonable administrative, technical, and organizational safeguards to protect your Personal Data. However, you acknowledge that no method of transmission over the internet or electronic storage is completely secure, and SevaLink does not guarantee absolute security of your information.
            </p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              Note: SevaLink acts solely as a technology platform facilitating connections between Users and independent Healthcare Providers. Any health-related information shared by you is transmitted to relevant Healthcare Providers at your own discretion and risk. SevaLink shall not be responsible for the accuracy, confidentiality, or misuse of such information by third parties.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">2.2 Required Information and Permissions</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              To provide seamless and efficient healthcare services, SevaLink may require access to certain information and device permissions as outlined below:
            </p>

            <h4 className="mt-5 text-lg font-semibold text-gray-900">2.2.1 Required Information</h4>
            <p className="mt-2 text-gray-700 leading-8 text-[15px] sm:text-base">We may collect the following information from Users:</p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Mobile Number: For account creation, authentication, and communication</li>
              <li>Name Details: First Name and Last Name for identification and service records</li>
              <li>Location Data: Precise real-time location and searched locations to enable ambulance booking, service matching, and navigation</li>
              <li>Contact Information: Mobile number for coordination with Healthcare Providers and support teams</li>
              <li>Payment Information: Billing details, transaction data, and payment method information for processing payments securely</li>
            </ul>

            <h4 className="mt-5 text-lg font-semibold text-gray-900">2.2.2 Device Permissions</h4>
            <p className="mt-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              SevaLink may request the following permissions on your device to ensure proper functionality of the Service:
            </p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Location Permission: To access real-time location for ambulance dispatch, nearby service discovery, and navigation</li>
              <li>Storage Permission: To upload, store, and access documents such as medical reports, prescriptions, and profile data</li>
              <li>Camera / Image Access: To capture or upload images for profile verification, medical records, or documentation</li>
              <li>SMS Access (Auto-read): To automatically detect and verify One-Time Passwords (OTP) for secure login and authentication</li>
              <li>Push Notifications: To send alerts, booking updates, reminders, emergency notifications, and service-related communications</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              Note: By granting the above permissions and providing the required information, you expressly consent to the collection, use, and processing of such data for the purpose of delivering SevaLink's services. You may manage or revoke certain permissions through your device settings; however, doing so may limit or affect the functionality of the Service.
            </p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              SevaLink only requests permissions that are strictly necessary for core functionality and does not access or collect data beyond what is required to provide its services.
            </p>
          </section>

          <section id="usage-data" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">3. Usage Data</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              Usage Data is collected automatically when you access or use SevaLink's Service. This data helps us monitor performance, improve functionality, enhance user experience, and ensure platform security.
            </p>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">Usage Data may include, but is not limited to:</p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Internet Protocol (IP) address of your device</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages or features of the Service that you access</li>
              <li>Date and time of your visit</li>
              <li>Time spent on specific pages or features</li>
              <li>Unique device identifiers and diagnostic data</li>
              <li>App interactions, crash logs, and performance analytics</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">When you access the Service through a mobile device, we may additionally collect:</p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Mobile device type and model</li>
              <li>Unique device ID</li>
              <li>Mobile operating system and version</li>
              <li>Mobile browser type</li>
              <li>Network information and connectivity details</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              We may also collect information that your browser or device automatically sends when you interact with the Service.
            </p>
          </section>

          <section id="information-collected-while-using-application" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">4. Information Collected While Using the Application</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              While using the SevaLink Application, and subject to your explicit consent and device permissions, we may collect certain additional information to enable core features and improve service delivery.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">4.1 Location Information</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">We may collect precise and approximate location data to:</p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Facilitate ambulance dispatch and emergency response</li>
              <li>Enable accurate service matching and nearby provider discovery</li>
              <li>Improve navigation and service efficiency</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              This information may be stored on your device or securely transmitted to SevaLink's servers and/or authorized Service Providers for operational purposes.
            </p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              You may enable or disable location access at any time through your device settings. However, disabling such access may impact or limit certain functionalities of the Service, including emergency and location-based services.
            </p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              By using the Application and granting required permissions, you consent to the automatic collection and processing of Usage Data and location information. SevaLink shall not be held responsible for any inaccuracies in location data or any service limitations arising due to disabled permissions or device restrictions.
            </p>
          </section>

          <section id="use-of-your-personal-data" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">5. Use of Your Personal Data</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              SevaLink may collect, use, process, and store your Personal Data for the following purposes:
            </p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>
                <span className="font-semibold">To Provide and Maintain the Service:</span> To operate, manage, and improve SevaLink's platform, including ambulance services, teleconsultation, homecare, and appointment scheduling, and to monitor usage and performance.
              </li>
              <li>
                <span className="font-semibold">To Manage Your Account:</span> To create, verify, and manage your user account, enabling access to various features and personalized services available on the platform.
              </li>
              <li>
                <span className="font-semibold">To Facilitate Healthcare Services:</span> To connect you with Healthcare Providers, share relevant information for consultations, coordinate ambulance services, and enable efficient healthcare delivery.
              </li>
              <li>
                <span className="font-semibold">For Contractual Obligations:</span> To process and fulfill bookings, transactions, and any agreements entered into through the platform, including payments and service delivery.
              </li>
              <li>
                <span className="font-semibold">To Communicate with You:</span> To contact you via calls, SMS, email, or push notifications regarding bookings, updates, reminders, emergency alerts, support responses, and important service-related communications.
              </li>
              <li>
                <span className="font-semibold">For Safety, Fraud Prevention, and Compliance:</span> To detect, prevent, and address technical issues, fraud, misuse, or illegal activities, and to comply with applicable legal and regulatory requirements.
              </li>
              <li>
                <span className="font-semibold">For Marketing and Promotional Purposes:</span> To provide you with information about services, offers, updates, or promotions similar to those you have used or shown interest in, unless you opt out of such communications.
              </li>
              <li>
                <span className="font-semibold">For Analytics and Improvement:</span> To analyze usage patterns, improve platform performance, enhance user experience, and optimize services, features, and marketing strategies.
              </li>
              <li>
                <span className="font-semibold">For Business Transfers:</span> To evaluate or conduct mergers, acquisitions, restructuring, or sale of assets, where Personal Data may be transferred as part of business operations.
              </li>
              <li>
                <span className="font-semibold">For Other Legitimate Purposes:</span> For any other purpose necessary to operate and improve SevaLink's services, with your consent where required.
              </li>
            </ul>
          </section>

          <section id="sharing-of-your-personal-data" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">6. Sharing of Your Personal Data</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              SevaLink may share your Personal Data in the following circumstances:
            </p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>
                <span className="font-semibold">With Healthcare Providers:</span> Your information, including relevant health data, may be shared with doctors, hospitals, clinics, ambulance providers, and other healthcare professionals strictly for the purpose of delivering requested services.
              </li>
              <li>
                <span className="font-semibold">With Service Providers:</span> We may share data with third-party vendors and partners for payment processing, analytics, communication services, cloud storage, technical support, and operational assistance.
              </li>
              <li>
                <span className="font-semibold">With Business Partners:</span> To offer integrated services, promotions, or additional healthcare-related features in collaboration with trusted partners.
              </li>
              <li>
                <span className="font-semibold">With Affiliates:</span> With our affiliates, subsidiaries, or related entities, who are required to comply with this Privacy Policy.
              </li>
              <li>
                <span className="font-semibold">For Legal and Regulatory Requirements:</span> When required by law, regulation, legal process, or governmental request, or to protect the rights, safety, and integrity of SevaLink, its users, or the public.
              </li>
              <li>
                <span className="font-semibold">For Business Transfers:</span> In connection with any merger, acquisition, funding, restructuring, or sale of company assets.
              </li>
              <li>
                <span className="font-semibold">With Other Users (Limited Cases):</span> If you voluntarily share information in public areas or interactive features of the platform, such information may be visible to other users.
              </li>
              <li>
                <span className="font-semibold">With Your Consent:</span> For any other purpose where you have provided explicit consent.
              </li>
            </ul>
          </section>

          <section id="payment-security" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">7. Payment Security</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                All payments made through SevaLink are processed using secure and trusted third-party payment gateways.
              </p>
              <p>
                SevaLink does not store your complete payment card details such as card number, CVV, or PIN. Payment transactions are encrypted and handled in compliance with applicable security standards and regulations.
              </p>
              <p>
                Users are advised to review the privacy and security policies of the respective payment service providers.
              </p>
              <p>
                SevaLink acts solely as a technology platform facilitating connections between Users and independent Healthcare Providers. Any Personal Data, including health-related information, shared with Healthcare Providers is done at your discretion and risk. SevaLink shall not be responsible for the actions, omissions, or data handling practices of such third parties.
              </p>
            </div>
          </section>

          <section id="retention-of-your-personal-data" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">8. Retention of Your Personal Data</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                SevaLink will retain your Personal Data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including the provision of healthcare services, account management, legal compliance, dispute resolution, and enforcement of agreements.
              </p>
              <p>
                We may retain your Personal Data for longer periods where required or permitted by applicable laws, including healthcare, taxation, or regulatory requirements.
              </p>
              <p>
                Usage Data is generally retained for a shorter duration and is primarily used for internal analysis, security enhancement, fraud prevention, and service improvement. However, such data may be retained for extended periods where necessary for legal obligations or legitimate business purposes.
              </p>
              <p>
                Upon termination of your account or upon valid request, we will take reasonable steps to delete or anonymize your Personal Data, unless retention is required for legal, regulatory, or operational reasons.
              </p>
            </div>
          </section>

          <section id="user-rights-and-data-deletion" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">8A. User Rights and Data Deletion</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              At SevaLink, we respect your rights regarding your personal data and provide you with control over how your information is used.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">Your Rights</h3>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>
                <span className="font-semibold">Right to Access:</span> You may request access to the personal data we hold about you.
              </li>
              <li>
                <span className="font-semibold">Right to Correction:</span> You may request correction of inaccurate or incomplete data.
              </li>
              <li>
                <span className="font-semibold">Right to Data Deletion:</span> You may request deletion of your account and all associated personal data.
              </li>
              <li>
                <span className="font-semibold">Right to Withdraw Consent:</span> You may withdraw your consent at any time where processing is based on consent.
              </li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">Account Deletion</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              Users can request deletion of their account and all associated personal data through the following methods:
            </p>
            <ol className="mt-3 list-decimal pl-5 sm:pl-6 space-y-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>
                <span className="font-semibold">In-App Deletion (Recommended):</span> Navigate to{" "}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono text-gray-800">Profile → Settings → Delete Account</code>{" "}
                and follow the steps to permanently delete your account.
              </li>
              <li>
                <span className="font-semibold">Web-Based Request:</span> Visit{" "}
                <a
                  href="https://sevalinkcare.com/delete-account"
                  className="text-red-700 hover:text-red-800 hover:underline underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://sevalinkcare.com/delete-account
                </a>
                {" "}to submit a deletion request.
              </li>
              <li>
                <span className="font-semibold">Email Request:</span> Send a deletion request to{" "}
                <a
                  href="mailto:support@sevalinkcare.com"
                  className="text-red-700 hover:text-red-800 hover:underline underline-offset-4"
                >
                  support@sevalinkcare.com
                </a>
                .
              </li>
            </ol>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">Data Deletion Process</h3>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Upon receiving a valid deletion request, we will initiate account deletion within <span className="font-semibold">24–72 hours</span>.</li>
              <li>Certain data may be retained for a limited period where required by legal obligations, medical compliance requirements, or fraud prevention and dispute resolution.</li>
            </ul>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">Data Retention After Deletion</h3>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Personal identifiable data will be deleted or anonymized.</li>
              <li>Transactional or legal records may be retained as required by applicable laws.</li>
            </ul>

            <p className="mt-5 text-gray-700 leading-8 text-[15px] sm:text-base">
              By using SevaLink, you acknowledge and agree to this data handling and deletion process.
            </p>
          </section>

          <section id="transfer-of-your-personal-data" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">9. Transfer of Your Personal Data</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                Your information, including Personal Data, may be processed at SevaLink's operational offices and at other locations where our partners, Service Providers, or Healthcare Providers are located. This may involve transferring your data to systems located outside your city, state, or country, where data protection laws may differ.
              </p>
              <p>
                By using the Service and providing your information, you consent to such transfers, storage, and processing.
              </p>
              <p>
                SevaLink will take all reasonable and necessary measures to ensure that your data is handled securely and in accordance with this Privacy Policy. We will ensure that appropriate safeguards, contractual obligations, and security controls are in place before transferring your Personal Data to any third party or jurisdiction.
              </p>
            </div>
          </section>

          <section id="disclosure-of-your-personal-data" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">10. Disclosure of Your Personal Data</h2>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">10.1 Business Transactions</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              In the event that SevaLink is involved in a merger, acquisition, restructuring, or sale of assets, your Personal Data may be transferred as part of such transaction. We will provide reasonable notice before your data becomes subject to a different privacy policy.
            </p>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">10.2 Legal Requirements and Law Enforcement</h3>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">
              SevaLink may disclose your Personal Data if required to do so by applicable law, regulation, legal process, or governmental request, including requests from courts, law enforcement agencies, or regulatory authorities.
            </p>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">We may also disclose your information where necessary to:</p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Comply with legal obligations</li>
              <li>Protect and defend the rights or property of SevaLink</li>
              <li>Prevent or investigate potential wrongdoing, fraud, or misuse</li>
              <li>Ensure the safety of users, Healthcare Providers, or the public</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              SevaLink shall not be held liable for any disclosure of Personal Data made in good faith in compliance with legal obligations, regulatory requirements, or lawful requests by authorities.
            </p>
          </section>

          <section id="other-legal-requirements" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">11. Other Legal Requirements</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              SevaLink may disclose your Personal Data in the good faith belief that such disclosure is necessary to:
            </p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Comply with applicable laws, regulations, legal processes, or governmental requests</li>
              <li>Protect and defend the rights, property, or interests of SevaLink</li>
              <li>Prevent, detect, or investigate potential fraud, misuse, illegal activities, or security issues related to the Service</li>
              <li>Protect the personal safety of Users, Healthcare Providers, or the public</li>
              <li>Protect against legal liability or enforce our Terms and Conditions</li>
            </ul>
          </section>

          <section id="security-of-your-personal-data" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">12. Security of Your Personal Data</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>
                The security of your Personal Data is important to SevaLink. We implement commercially reasonable administrative, technical, and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
              </p>
              <p>
                However, you acknowledge that no method of transmission over the internet or method of electronic storage is completely secure. While we strive to protect your Personal Data, SevaLink does not guarantee absolute security and shall not be held liable for any unauthorized access, data breach, or loss beyond its reasonable control.
              </p>
            </div>
          </section>

          <section id="detailed-information-on-processing" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">13. Detailed Information on Processing</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              SevaLink may engage third-party Service Providers to support and enhance the functionality of the Service. These providers may have access to your Personal Data strictly for the purpose of performing tasks on our behalf and are contractually obligated to protect your information.
            </p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              These third parties may collect, process, store, and transfer your data in accordance with their respective privacy policies.
            </p>
          </section>

          <section id="analytics" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">14. Analytics</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              We may use third-party analytics tools and Service Providers to monitor, analyze, and improve the performance, usage, and functionality of the Service. These tools may collect Usage Data and other technical information to help us understand user behavior and enhance user experience.
            </p>
          </section>

          <section id="email-marketing-and-communications" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">15. Email Marketing and Communications</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              SevaLink may use your Personal Data to send you service-related updates, notifications, newsletters, promotional content, and other relevant communications.
            </p>
            <p className="mt-3 text-gray-700 leading-8 text-[15px] sm:text-base">You may opt out of receiving marketing or promotional communications at any time by:</p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Clicking the "unsubscribe" link in emails, or</li>
              <li>Contacting us directly</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              Please note that you may still receive essential service-related communications even after opting out of marketing messages.
            </p>
          </section>

          <section id="childrens-privacy" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">16. Children's Privacy</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              SevaLink's Service is not intended for individuals under the age of 18. We do not knowingly collect Personal Data from minors without verified parental or guardian consent.
            </p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              If you are a parent or guardian and believe that a minor has provided Personal Data, please contact us. Upon becoming aware of such data collection without proper consent, we will take appropriate steps to delete such information.
            </p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              Where required by applicable law, we may obtain parental or guardian consent before collecting or processing data of minors.
            </p>
          </section>

          <section id="links-to-third-party-websites" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">17. Links to Third-Party Websites</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              The Service may contain links to third-party websites or services that are not operated or controlled by SevaLink.
            </p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              We do not control and are not responsible for the content, privacy practices, or policies of such third-party platforms. You are advised to review the privacy policies of any external websites you visit.
            </p>
          </section>

          <section id="governing-law-and-jurisdiction" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">18. Governing Law and Jurisdiction</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              This Privacy Policy shall be governed by and construed in accordance with the laws of India.
            </p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              Any disputes arising out of or in connection with this Privacy Policy shall be subject to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat.
            </p>
          </section>

          <section id="changes-to-this-privacy-policy" className="py-8 border-b border-black/10 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">19. Changes to This Privacy Policy</h2>
            <div className="mt-4 space-y-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              <p>SevaLink reserves the right to update, modify, or revise this Privacy Policy at any time, at its sole discretion.</p>
              <p>We will notify you of any material changes by:</p>
            </div>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>Posting the updated Privacy Policy on this page</li>
              <li>Updating the "Last Updated" date at the top of this Privacy Policy</li>
              <li>Providing notice via email, SMS, or in-application notification, where required or appropriate</li>
            </ul>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">You are advised to review this Privacy Policy periodically for any updates or changes.</p>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              Your continued access to or use of the Service after any modifications to this Privacy Policy shall constitute your acknowledgment and acceptance of such changes.
            </p>
          </section>

          <section id="contact-us" className="pt-8 scroll-mt-28">
            <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-gray-700 leading-8 text-[15px] sm:text-base">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your Personal Data, you may contact us:
            </p>
            <ul className="mt-3 list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 leading-8 text-[15px] sm:text-base">
              <li>
                Website:{" "}
                <a className="text-red-700 hover:text-red-800 hover:underline underline-offset-4" href="https://sevalinkcare.com" target="_blank" rel="noreferrer">
                  https://sevalinkcare.com
                </a>
              </li>
              <li>
                Email:{" "}
                <a className="text-red-700 hover:text-red-800 hover:underline underline-offset-4" href="mailto:contact@sevalinkcare.com">
                  contact@sevalinkcare.com
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
