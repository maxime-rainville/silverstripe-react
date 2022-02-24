import React from 'react';
import { loadComponent } from 'lib/Injector';

const breadcrumbs = [
    {
        text: 'Default Component',
        href: '#',
    },
];

const LeftAndMain = loadComponent('LeftAndMain');

const DefaultComponent = () => {

    return (
        <LeftAndMain breadcrumbs={breadcrumbs}>
            To create new component, you should to do the following...
        </LeftAndMain>
    );
};

export default DefaultComponent;