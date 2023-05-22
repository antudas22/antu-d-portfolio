import React from 'react';
import po1 from '../../assets/po1.png'

const ThirdProject = () => {
    return (
        <div>
            <img src={po1} className='rounded-xl' alt="" />
            <div className='my-5 p-5'>
<h3 className='text-3xl font-bold mb-5'>Program Of Operation</h3>

<p># Added to-dos saved in the local storage in the browser.</p>
<p># After modification, the to-dos will be saved in local storage.</p>
<p># To-dos can be removed and marked as completed.</p><br/>
<p><span className='font-bold'>Technologies:</span> React JS, Tailwind CSS, daisyUI, React Hot Toast, React Icons.</p>
<br/>
<a href="https://github.com/antudas22/program-of-operation" className='link' target='blank'>Github Link - Client</a><br/>
<a href="https://bright-crumble-2e2d04.netlify.app/" className='link' target='blank'>Live Website Link</a>
</div>
        </div>
    );
};

export default ThirdProject;