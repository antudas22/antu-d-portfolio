import React from 'react';
import './FirstProject.css'
import lp1 from '../../assets/lp1.png';
import lp2 from '../../assets/lp2.png';
import lp3 from '../../assets/lp3.png';
import lp4 from '../../assets/lp4.png';
import lp5 from '../../assets/lp5.png';
import lp6 from '../../assets/lp6.png';
import { Carousel } from 'flowbite-react';

const FirstProject = () => {

    return (
        <div className=''>
            <div className="h-[600px]">
  <Carousel slide={false}>
    <img
      src={lp1}
      alt="..."
    />
    <img
      src={lp2}
      alt="..."
    />
    <img
      src={lp3}
      alt="..."
    />
    <img
      src={lp4}
      alt="..."
    />
    <img
      src={lp5}
      alt="..."
    />
    <img
      src={lp6}
      alt="..."
    />
  </Carousel>
</div>
            
<div className='my-5 p-5'>
<h3 className='text-3xl font-bold mb-5'>Lawyer Point</h3>

<p># Register/Login with Facebook, Google, GitHub, email/password, email verification, and password recovery system.</p>
<p># Appointment section with a calendar. After selecting a date, users can view all available appointments and reserve a specific date and time, specifying their lawsuit.</p>
<p># In the dashboard route, there are admin and user panels with their respective activities, such as 'My Appointments,' 'All Users,' 'Add A Lawyer,' 'Manage Lawyers,' and 'Complete Payments' section.</p>
<p># The admin can change the role of any user, add a lawyer by providing the necessary information, and also remove any lawyer from the list of all lawyers.</p>
<p># The user can complete their payment using a card and also view and download their payment receipt as a PDF.</p>
<br/>
<p><span className='font-bold'>Technologies:</span> React JS, Tailwind CSS, daisyUI, React Router Dom, Firebase, Map JS, Email JS, Stripe JS, Tanstack Query,  Countup, Day Picker, React Hook Form, React Hot Toast, React Icons, Scroll Trigger, React To Print, Node JS, MongoDB, JWT, Nodemailer.</p>
<br/>
<a href="https://github.com/antudas22/lawyer-point-client" className='link' target='blank'>Github Link - Client</a><br/>
<a href="https://github.com/antudas22/lawyer-point-server" className='link my-2' target='blank'>Github Link - Server</a><br/>
<a href="https://lawyer-point-6b2ec.web.app/" className='link' target='blank'>Live Website Link</a>
</div>
        </div>
    );
};

export default FirstProject;