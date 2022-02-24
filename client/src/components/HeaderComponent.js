import React from 'react';
import Toolbar from 'components/Toolbar/Toolbar';
import { Component as Breadcrumb } from 'components/Breadcrumb/Breadcrumb';

const HeaderComponent = ({ breadcrumbs, currentPath }) => {

    const breadcrumb = () => {
        const urlSegments = window.location.pathname.split('/');
        let crumbs = [];
        breadcrumbs.forEach(breadcrumb => {
            let crumb = {}
            if (urlSegments.includes(breadcrumb.href)) {
                crumb.text = breadcrumb.text
                crumb.href = `${currentPath}/${breadcrumb.href}`;
                crumbs.push(crumb);
            }
        });
        return crumbs;
    }

    return (
        <Toolbar className="fill-width">
            <Breadcrumb multiline crumbs={breadcrumb()} />
        </Toolbar>
    );
};

export default HeaderComponent;