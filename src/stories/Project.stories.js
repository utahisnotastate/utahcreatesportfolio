import React from 'react';
import Project from './Project';
import evaemrimage from '../assets/img/evaemr.png'// Path to your image

export default {
    title: 'Project',
    component: Project,
};

const Template = (args) => <Project {...args} />;

export const Default = Template.bind({});
Default.args = {
    imageSrc: evaemrimage,
    title: 'Mountain Adventure',
    description: 'Experience the thrill of mountain hiking and enjoy breathtaking views.'
};