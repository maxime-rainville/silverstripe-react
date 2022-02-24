import React from 'react';
import { loadComponent } from 'lib/Injector';
import classNames from "classNames";

const breadcrumbs = [
    {
        text: 'Component NOT FOUND',
        href: '#',
    },
];

const LeftAndMain = loadComponent('LeftAndMain');

const ReactAdminErrorComponent = ({ componentName }) => {

    return (
        <LeftAndMain breadcrumbs={breadcrumbs}>
            <div className="error-message">
                <h1>404</h1>
                <h2>Component Not Found :(</h2>
            </div>
        </LeftAndMain>
    );
};

export default ReactAdminErrorComponent;