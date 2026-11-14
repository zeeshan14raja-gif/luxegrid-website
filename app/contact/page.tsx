import type {Metadata} from 'next';
import {Eyebrow,Footer} from '@/components/Shared';
import {EnquiryForm} from '@/components/EnquiryForm';
export const metadata:Metadata={title:'Contact',description:'Start a conversation with LuxeGrid about your property or construction plans in Islamabad.'};
export default function Contact(){return <><main id="main" className="simple-page"><section className="simple-heading"><Eyebrow>Contact LuxeGrid</Eyebrow><h1>Let’s start the<br/><em>right conversation.</em></h1><p>A question, a plan, or a new possibility. Tell us what you have in mind.</p></section><section className="contact-content"><div className="contact-intro"><Eyebrow>Get in touch</Eyebrow><h2>Your next chapter<br/>starts here.</h2><p>Whether you’re looking to buy, sell, rent, or build, share a few details about your plans.</p><span className="location-note">Based in Islamabad</span></div><EnquiryForm/></section></main><Footer current="contact"/></>}
