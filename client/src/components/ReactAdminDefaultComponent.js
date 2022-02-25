import React from 'react';
import { loadComponent } from 'lib/Injector';

const breadcrumbs = [
    {
        text: 'React Admin Default Component',
        href: '#',
    },
];

const LeftAndMain = loadComponent('LeftAndMain');

const ReactAdminDefaultComponent = () => {

    return (
        <LeftAndMain breadcrumbs={breadcrumbs}>
            To create new component, you should to do the following...
        </LeftAndMain>
    );
};

export default ReactAdminDefaultComponent;